starter.controller("myCollectionCtrl",["$scope","checkSvc","$rootScope","$stateParams",function(e,n,o,t){angular.extend(e,t),n.checkLogin(),e.navIndex=1,e.changeIndex=function(n){e.navIndex=n},$.ajax({type:"GET",url:"http://api.izsjia.com/user/user/getinfo",beforeSend:function(e){e.setRequestHeader("token",o.token)},success:function(n){e.userInfo=n.response,console.log(n)}})}]);