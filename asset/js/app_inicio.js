angular.module('myApp',['lumx','ngRoute'])
.config(function($routeProvider){
	$routeProvider
		.when("/",{
			controller:"ctrlContacto",
			templateUrl:"asset/templates/home.html"
		})
})
/*.controller('ctrlContacto',function($scope,LxNotificationService){
	$scope.notificar= function(){

		LxNotificationService.success("Hola mundo");
	}
});
*/