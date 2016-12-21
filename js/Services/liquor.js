
app.factory('liquor', ['$http',function($http){

return {
		getLiquor: function(onSuccess, onFailure){
			var products = {};

			$http.get('http://depotqa.us-west-2.elasticbeanstalk.com/liquor')
			.success(onSuccess)
			.error(onFailure);
		},
		getTypes: function(onSucess, onFailure){
			var products = {};

			$http.get('http://depotqa.us-west-2.elasticbeanstalk.com/liquor/type')
			.success(onSucess)
			.error(onFailure);
		}
	
}
}]);