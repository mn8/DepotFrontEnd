
app.factory('beer', ['$http',function($http){
	return {
		getBeer: function(onSuccess, onFailure){
			var products = {};

			$http.get('http://depotqa.us-west-2.elasticbeanstalk.com//beer')
			.success(onSuccess)
			.error(onFailure);
		},

		getProducers: function(onSuccess, onFailure){
			var producers = {};

			$http.get('http://depotqa.us-west-2.elasticbeanstalk.com//beer/producers')
			.success(onSuccess)
			.error(onFailure);
		}
	}
}]);
