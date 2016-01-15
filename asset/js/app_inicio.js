angular.module('myApp',['lumx','ngRoute','ngResource'])
.config(function($routeProvider){
	$routeProvider
		.when("/",{
			controller:"ctrlContacto",
			templateUrl:"asset/templates/home.html"
		}).when("/post/:id",{
			controller:"Postcontroller",
			templateUrl:"asset/templates/post.html"
		}).when("/posts/new",{
			controller:"Newcontroller",
			templateUrl:"asset/templates/save.html"	
		}).when("/posts/edit/:id",{
			controller:"Postcontroller",
			templateUrl:"asset/templates/save.html"
		}).when("/show/:id",{
			controller:"ShowController",
			templateUrl:"asset/templates/show.html"
		})
});
/*.controller('ctrlContacto',function($scope,LxNotificationService){
	$scope.notificar= function(){

		LxNotificationService.success("Hola mundo");
	}
});
*/