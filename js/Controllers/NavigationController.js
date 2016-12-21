 // AngularJS Stuff
var app = angular.module('app');
app.controller('NavigationController', ['$scope',function($scope, beer) {
    $scope.pages = ["home",
        "beer",
        "wine",
        "liquor",
        /*"groceries",*/
        "drinks",
        "deli",
        "tobacco",
        "index"];
}]).directive("navigationDirective", function(){
  return{
      templateUrl: "./js/Directives/navigationDirective.html"
  };
});