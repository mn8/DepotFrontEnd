
app.factory('tobacco', ['$http',function($http){
return {
		getTobacco: function(onSuccess, onFailure){
			var products = {};

			$http.get('http://depotqa.us-west-2.elasticbeanstalk.com/tobacco')
			.success(onSuccess)
			.error(onFailure);
		},
	
}
}]);
`