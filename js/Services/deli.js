
app.factory('deli', ['$http',function($http){
return {
		getDeli: function(onSuccess, onFailure){
			var products = {};

			$http.get('http://depotqa.us-west-2.elasticbeanstalk.com/deli')
			.success(onSuccess)
			.error(onFailure);
		}
}
}]);
