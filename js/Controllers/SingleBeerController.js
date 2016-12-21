 // AngularJS Stuff
var app = angular.module('app', ['angularUtils.directives.dirPagination','ngRoute']);
app.controller('SingleBeerCtrl', ['$scope','$location', 'singleBeer',function($scope, $location, singleBeer) {
    $scope.currentPage = 1;
    $scope.pageSize = 10;

    singleBeer.success(function(data){
        $scope.beer=data;
        console.log(data);
    });
    $scope.isActive = function (viewLocation) {
         var active = (viewLocation === $location.path());
         return active;
      };
 }]);

app.controller('OtherController', function($scope){
    $scope.pageChangeHandler = function(num) {
    console.log('going to page ' + num);
    };
});

