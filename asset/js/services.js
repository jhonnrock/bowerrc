angular.module("myApp")
.factory("Postresource",function($resource){
		return $resource('http://jsonplaceholder.typicode.com/posts/:id', {id : "@id"},{update : {method: "PUT"}});
});


