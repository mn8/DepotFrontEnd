var app = angular.module('DepotApp', ['ngRoute','app.singleBeer']).
config(['$locationProvider', '$routeProvider',function(injectables, $locationProvider, $routeProvider) { // provider-injector
	$httpProvider.defaults.useXDomain = true;
	$httpProvider.defaults.withCredentials = true;
	delete $httpProvider.defaults.headers.common["X-Requested-With"];
	$httpProvider.defaults.headers.common["Accept"] = "application/json";
	$httpProvider.defaults.headers.common["Content-Type"] = "application/json";
	$locationProvider.hashPrefix('!');
  	$routeProvider.otherwise({redirectTo: '/view1'});
}]);
