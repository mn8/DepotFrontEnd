 // AngularJS Stuff
var app = angular.module('app');
app.controller('NavigationController', ['$scope',function($scope, beer) {
    $scope.pages = ["index",
        "beer",
        "wine",
        "liquor",
        /*"groceries",*/
        "drinks",
        "deli",
        "tobacco"
        ];
}]).directive("navigationDirective", function(){
  return{
      templateUrl: "./js/Directives/navigationDirective.html"
  };
});