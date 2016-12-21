


 // AngularJS Stuff
var app = angular.module('app', ['angularUtils.directives.dirPagination']);
app.controller('MainCtrl', ['$scope','beer', 'liquor', 'wine',function($scope, beer, liquor, wine) {

    $scope.currentPage = 1;
    $scope.pageSize = 10;

    onBeerSuccess = function(data){
      var producers = data.sortBy('name'); 
      $scope.producers =producers;
    }
    onLiquorSuccess = function(data){
        var liquors = data.sortBy("type");
        $scope.liquors = liquors;
    }
    onWineSuccess = function(data){
        var wines = data.sortBy("type");
        $scope.wines = wines;
    }
    onFailure = function(data){
     console.log('Error' + data);
    }

    beer.getProducers(onBeerSuccess, onFailure);
    liquor.getTypes(onLiquorSuccess, onFailure);
    wine.getProducers(onWineSuccess, onFailure);




}]);

app.filter('capitalize', function() {
    return function(input) {
      var formatedString = input.charAt(0).toUpperCase()
      for (var i = 1; i < input.length; i++) {
        if(input[i-1] == " "){
          formatedString += input.charAt(i).toUpperCase();
        }else{
          formatedString += input.charAt(i);
        }
 
      }
      return formatedString;
    }
});







