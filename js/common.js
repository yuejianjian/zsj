starter.factory("httpSvc",["$rootScope","$q","$http","CONFIG","$filter",function(e,t,n,o,r){var c={initParams:function(e){var n=t.defer(),o=angular.extend({},e);return n.resolve(angular.copy(o)),n.promise},getHttpPromise:function(e,r,c,i){var a=t.defer(),s=angular.extend({},{method:e,url:o.HTTP_URL+r,headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json;charset=utf-8"},timeout:i||1e4,responseType:"json"});return"GET"===angular.uppercase(e)?s=angular.extend(s,{params:c}):"POST"===angular.uppercase(e)&&(s=angular.extend(s,{data:c})),n(s).success(function(e){a.resolve(e),console.info("请求成功:",e)}).error(function(e){a.reject(e),console.info("请求失败:",e)}),a.promise}},i={post:function(e,n,o){var r=t.defer();return c.initParams(n).then(function(t){c.getHttpPromise("POST",e,t,o).then(function(t){r.resolve(t),console.log(e,t)},function(e){r.reject(e)})}),r.promise},getToken:function(){var e=t.defer(),n=0;return function e(t){i.post("/api/token/index",{}).then(function(o){"1"==o.code?(console.info(o),t.resolve(o.response.sign)):n++<2?e(t):(console.info("获取token失败"),t.reject())},function(){console.info("获取token失败"),t.reject(),n++<2?e(t):(console.info("获取token失败"),t.reject())})}(e),e.promise}};return i}]).factory("httpInterceptor",["$injector","$q",function(e,t){return{request:function(t){if("POST"==t.method){e.get("popupSvc").loading()}return t},requestError:function(n){if("POST"==n.config.method){e.get("popupSvc").loadingHide()}return t.reject(n)},response:function(t){if("POST"==t.config.method){e.get("popupSvc").loadingHide()}return t},responseError:function(n){if(console.log(n),401==n.status){e.get("$state")}if(500==n.status){var o=e.get("popupSvc");o.loadingHide()}if("POST"==n.config.method){var o=e.get("popupSvc");o.loadingHide(),n.status}return t.reject(n)}}}]).config(["$httpProvider",function(e){e.interceptors.push("httpInterceptor")}]).factory("popupSvc",["$ionicLoading","$ionicPopup","$rootScope",function(e,t,n){return{loading:function(t,n){t?e.show({template:t,duration:n||3e3}):e.show({template:"<ion-spinner icon='spiral'></ion-spinner>"})},alert:function(e,n){return t.alert({cssClass:"popup-alert alert-has-btn",okType:"button-secondary",template:'<div class="message-content">'+e+"</div>",okText:n})},message:function(e){return t.alert({cssClass:"popup-alert btn-none",template:'<div class="message-content">'+e+"</div>"})},confirm:function(e,o,r,c){var i=n.$new(),a={cssClass:"popup-confirm",template:'<div class="message-content"><div class="close-btn"><i ng-if="closeBtn" ng-click="close()" class="ion-close-round close-btn"></i></div>'+e+"</div>",cancelText:o||"确定",cancelType:"confirm-btn",okText:r||"取消",okType:"cancel-btn",scope:i},s=t.confirm(a);return i.closeBtn="boolean"!=typeof c||c,i.close=function(){s.close()},s},show:function(e,o){var r=n.$new(),c={cssClass:"popup-confirm has-close",template:'<div class="message-content"><div class="close-btn"><i ng-click="close()" class="ion-close-round close-btn"></i></div>'+e+"</div>",buttons:angular.extend([{text:"Cancel",type:"button-default"},{text:"OK",type:"button-default"}],o),scope:r},i=t.confirm(c);return r.close=function(){i.close()},i},loadingShow:function(){this.loading()},loadingHide:function(){e.hide()}}}]).factory("base64",function(){function e(){_keyStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",this.encode=function(e){var t,n,o,r,c,i,a,s="",u=0;for(e=_utf8_encode(e);u<e.length;)t=e.charCodeAt(u++),n=e.charCodeAt(u++),o=e.charCodeAt(u++),r=t>>2,c=(3&t)<<4|n>>4,i=(15&n)<<2|o>>6,a=63&o,isNaN(n)?i=a=64:isNaN(o)&&(a=64),s=s+_keyStr.charAt(r)+_keyStr.charAt(c)+_keyStr.charAt(i)+_keyStr.charAt(a);return s},this.decode=function(e){var t,n,o,r,c,i,a,s="",u=0;for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");u<e.length;)r=_keyStr.indexOf(e.charAt(u++)),c=_keyStr.indexOf(e.charAt(u++)),i=_keyStr.indexOf(e.charAt(u++)),a=_keyStr.indexOf(e.charAt(u++)),t=r<<2|c>>4,n=(15&c)<<4|i>>2,o=(3&i)<<6|a,s+=String.fromCharCode(t),64!=i&&(s+=String.fromCharCode(n)),64!=a&&(s+=String.fromCharCode(o));return s=_utf8_decode(s)},_utf8_encode=function(e){e=e.replace(/\r\n/g,"\n");for(var t="",n=0;n<e.length;n++){var o=e.charCodeAt(n);o<128?t+=String.fromCharCode(o):o>127&&o<2048?(t+=String.fromCharCode(o>>6|192),t+=String.fromCharCode(63&o|128)):(t+=String.fromCharCode(o>>12|224),t+=String.fromCharCode(o>>6&63|128),t+=String.fromCharCode(63&o|128))}return t},_utf8_decode=function(e){for(var t="",n=0,o=c1=c2=0;n<e.length;)o=e.charCodeAt(n),o<128?(t+=String.fromCharCode(o),n++):o>191&&o<224?(c2=e.charCodeAt(n+1),t+=String.fromCharCode((31&o)<<6|63&c2),n+=2):(c2=e.charCodeAt(n+1),c3=e.charCodeAt(n+2),t+=String.fromCharCode((15&o)<<12|(63&c2)<<6|63&c3),n+=3);return t}}var t=new e;return{encode:function(e){return t.encode(e)},decode:function(e){return t.decode(e)}}}).factory("checkSvc",["$rootScope","$state",function(e,t){return{checkLogin:function(){e.token&&40==e.token.length?console.log("已登录"):t.go("login")}}}]);