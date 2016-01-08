angular.module("myApp")
.controller('ctrlContacto',function($scope,LxNotificationService){
	$scope.notificar=function(){
		LxNotificationService.success("Hola mundo");
	}
});
