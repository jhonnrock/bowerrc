angular.module("myApp")
.directive("myAutocomplete",function(){

	function link(scope,element,attrs){
		$(element).autocomplete({
			source: scope[attrs.myAutocomplete],
			select: function(ev,ui)
			{
				ev.preventDefault();	
				if(ui.item){
					scope.optionSelected(ui.item.value);
				}
			},
			focus:function(ev,ui)
			{
				ev.preventDefault();
				$(this).val(ui.item.label);	
			},
		});
	};
	return {
		link: link
	}; 
}).controller('ctrlContacto',function($scope,LxDialogService,LxNotificationService,$resource,Postresource,$routeParams,$http){

// angular.module()


	User =$resource('http://jsonplaceholder.typicode.com/users/:id', {id : '@id'});

	$scope.posts= Postresource.query();
	$scope.users= User.query();
	console.log($scope.users);
	$scope.repos=[];
	$http.get('http://jsonplaceholder.typicode.com/users/')
	.success(function(data){
		console.log(data);
			for (var i=data.length-1; i>=0; i--)
		{
			var repo=data[i];
			console.log(repo);
			$scope.repos.push(repo.name);
		};
	
	})
	.error(function(error){

	});





	$scope.optionSelected =function(data){
		$scope.$apply(function(){
			$scope.main_repo=data;
			console.log($scope.main_repo); 
		})
	}	



	$scope.removePost = function(poste){
		Postresource.delete({id: poste.id},function(data){
			console.log(data);
			console.log(poste);
			console.log("eliminados");


	}); 

	


	$scope.posts = $scope.posts.filter(function(element){
		//console.log(element);
		return element.id !== poste.id;
	});	
	}	

	
	$scope.opendDialog= function(poster){
		console.log("hola mundo");
		console.log(poster);
		console.log($routeParams);
		console.log(Postresource.get({id: poster.id}));
		//Postresource.get({id : $routeParams.id});
		LxDialogService.open(poster.id);
			closingDialog();
	}
	$scope.closingDialog =function(){
		LxNotificationService.info('Dialog closed!');
	}


			//query()->get/post --> un arreglo de post ->isArray: true;
	$scope.notificar=function(){
		LxNotificationService.success("Hola mundo");
	}
}).controller('ShowController',function($scope,Postresource){
		$scope.Mostar=function(){
				console.log("hola mundo");
	}


}).controller('Postcontroller',function($scope,Postresource,$routeParams,$location){
	$scope.titulo="editar post";
	$scope.post=Postresource.get({id: $routeParams.id});
	console.log(Postresource.get({id: $routeParams.id}));
	$scope.savePost = function(){
	 	Postresource.update({id: $scope.post.id},{data: $scope.post},function(data){
	 		console.log(data);
	 		$location.path('/post/'+$scope.post.id);
	 	});


	 }

}).controller('Newcontroller',function($scope,Postresource,$location){
	 $scope.post={};
	 $scope.titulo="crear envios";
	 $scope.savePost = function(){
	 	Postresource.save({data: $scope.post},function(data){
	 		console.log(data);
	 		$location.path('/');
	 	});
	 }
}).controller('EditController',function($scope,Postresource){

});
