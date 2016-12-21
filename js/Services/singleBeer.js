
app.factory('singleBeer', ['$http','$location',function($http, $location){
	var plu = $location.absUrl().split("?plu=")[1].split("/")[0];
	console.log("service " + plu);
	return  $http.jsonp('http://localhost:8080/beer/'+plu+'?callback=JSON_CALLBACK') 
	.success(function(data, status, headers, config){
		var length = data.length;
		return data;
		})
		.error(function(err){
			console.log("Error " + err);
			return err;
		});
}]);
