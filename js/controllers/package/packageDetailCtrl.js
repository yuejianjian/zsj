starter.controller("packageDetailCtrl",["popupSvc","$scope","$http","$stateParams","httpSvc",function(e,t,s,o,i){angular.extend(t,o),console.log(o.suit_id),t.suit_id=o.suit_id,i.post("/suit/suit/details",{suitId:o.suit_id}).then(function(e){t.packageDetail=e.response}),i.post("/suit/bom/list",{suitId:o.suit_id}).then(function(e){t.material=e.response}),t.changeIndex=function(e){t.navIndex=e},t.showCalc=function(){t.isShowCalc=!t.isShowCalc},t.showTel=function(){t.isShowTel=!t.isShowTel},t.showYuyue=function(){t.isShowYuyue=!t.isShowYuyue,t.isShowYuyue&&console.log(1111)},t.yuyue=function(){i.post("/suit/appointment/index",{suitId:o.suit_id,name:t.name,mobile:t.mobile,token:""}).then(function(e){t.isShowYuyue=!t.isShowYuyue,t.showTip=!0,t.tip=e.msg})},t.lookBigimg=function(){t.isShowBigimg=!t.isShowBigimg},t.scrollHeight=document.getElementsByClassName("view-container")[0].clientHeight-document.getElementsByClassName("footer-box")[0].clientHeight,t.grid_height={height:t.scrollHeight+"px"};var n,l,u=document.getElementById("myscroll"),a=document.getElementsByClassName("header-box")[0],c=document.getElementsByClassName("nav-box2")[0],m=document.getElementsByClassName("nav-box")[0],d=m.offsetTop-m.clientHeight;u.onscroll=function(){var e=u.getElementsByClassName("scroll")[0].style.transform;if(e){var t=e.indexOf("(")+1,s=e.indexOf(")"),o=e.substring(t,s),i=o.split(",");l=i[0],n=i[1]}else n=document.getElementById("myscroll").scrollTop,l=document.getElementById("myscroll").scrollLeft;n=n.replace("px",""),a.style.display="none",c.style.display="none",n<-10&&(a.style.display="block"),n<-d&&(c.style.display="block")}}]);