// AngularJS Stuff
var app = angular.module('app', ['angularUtils.directives.dirPagination']);
app.controller('GroceriesController', ['$scope','groceries',function($scope, groceries) {

    $scope.currentPage = 1;
    $scope.pageSize = 10;


    groceries.success(function(data){
        $scope.types = data; 
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



