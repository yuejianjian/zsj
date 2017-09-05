starter.factory("util",["$interval",function(e){return{random:function(){return Math.ceil(10*Math.random())},countDown:function(t){var s,r=angular.extend({timer:60},t),n={run:function(t,u){s||(t(r.timer),s=e(function(){t(--r.timer),r.timer<=0&&(e.cancel(s),u(),n.cancel())},1e3))},cancel:function(){e.cancel(s),r.timer=t.timer,s=null}};return n},str2date:function(e,t){var s=(new RegExp("[一-龥]|/|-|:|s","g"),new Date);return t?new Date(e.substr(t.indexOf("yyyy"),4)?e.substr(t.indexOf("yyyy"),4):s.getFullYear(),e.substr(t.indexOf("MM"),2)?e.substr(t.indexOf("MM"),2)-1:s.getMonth(),e.substr(t.indexOf("dd"),2)?e.substr(t.indexOf("dd"),2):s.getDate(),e.substr(t.indexOf("HH"),2)?e.substr(t.indexOf("HH"),2):0,e.substr(t.indexOf("mm"),2)?e.substr(t.indexOf("mm"),2):0,e.substr(t.indexOf("ss"),2)?e.substr(t.indexOf("ss"),2):0,e.substr(t.indexOf("SSS"),3)?e.substr(t.indexOf("SSS"),3):0):(e=e.replace(/[\u4e00-\u9fa5]|\/|-|:|\s/g,""),new Date(e.substr(0,4)?e.substr(0,4):s.getFullYear(),e.substr(4,2)?e.substr(4,2)-1:s.getMonth(),e.substr(6,2)?e.substr(6,2):s.getDate(),e.substr(8,2)?e.substr(8,2):0,e.substr(10,2)?e.substr(10,2):0,e.substr(12,2)?e.substr(12,2):0,e.substr(16,3)?e.substr(16,3):0))},getDHMS:function(e){return{days:Math.floor(e/3600/24),hours:Math.floor(e/3600%24),mins:Math.floor(e/60%60),seconds:Math.floor(e%60),dif:e}},dateFormat:function(e,t){var s={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));for(var r in s)new RegExp("("+r+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?s[r]:("00"+s[r]).substr((""+s[r]).length)));return t},dateStrReformat:function(e,t,s){if(!e)return"";var r=this.str2date(e,t);return this.dateFormat(r,s)},dateCount:function(e,t,s){switch("string"==typeof e&&(e=this.str2date(e,"yyyyMMddHHmmss")),s){case"y":e.setFullYear(e.getFullYear()+t);break;case"M":e.setMonth(e.getMonth()+t);break;case"d":e.setDate(e.getDate()+t);break;case"h":e.setHours(e.getHours()+t);break;case"m":e.setMinutes(e.getMinutes()+t);break;case"s":e.setSeconds(e.getSeconds()+t);break;case"S":e.setMilliseconds(e.getMilliseconds()+t)}return e},isContain:function(e,t){for(var s=0;s<e.length;s++)if(e[s]===t)return!0;return!1},filterUrl:function(e){return e=e.replace("%","%25"),e=e.replace("/","%2F").replace("?","%3F").replace("#","%23").replace("&","%26").replace("=","%3D")}}}]);