
app.factory('drink', ['$http',function($http){
return {
		getDrink: function(onSuccess, onFailure){
			var products = {};

			$http.get('http://depotqa.us-west-2.elasticbeanstalk.com/drink')
			.success(onSuccess)
			.error(onFailure);
		}
}
}]);
