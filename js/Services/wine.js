
app.factory('wine', ['$http',function($http){
return {
		getWine: function(onSuccess, onFailure){
			var products = {};

			$http.get('http://depotqa.us-west-2.elasticbeanstalk.com/wine')
			.success(onSuccess)
			.error(onFailure);
		},
		getProducers: function(onSucess, onFailure){
			var products = {};

			$http.get('http://depotqa.us-west-2.elasticbeanstalk.com/wine/producer')
			.success(onSucess)
			.error(onFailure);
		}
	
}
}]);
