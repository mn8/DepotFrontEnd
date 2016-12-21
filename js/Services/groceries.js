
app.factory('groceries', ['$http',function($http){
	return  $http.jsonp('http://localhost:8080/grocery/type?callback=JSON_CALLBACK') 
	.success(function(data, status, headers, config){
		var length = data.length;
		return data;
		})
		.error(function(err){
			console.log("Error " + err);
			return err;
		});
}]);


