starter.controller("showroomDetailCtrl",["$scope","httpSvc","$stateParams","popupSvc",function(e,n,i,t){angular.extend(e,i),e.roomList={};new Swiper(".swiper-container",{pagination:".swiper-pagination",paginationType:"fraction"});n.post("/experience/experience/images",{experienceId:i.experienceId}).then(function(n){e.imgList=n.response}),n.post("/experience/experience/details",{experienceId:i.experienceId}).then(function(n){e.info=n.response}),e.collect=function(){e.isCollect?(t.loading("取消收藏",1e3),e.isCollect=!1):(t.loading("收藏成功",1e3),e.isCollect=!0)}}]);