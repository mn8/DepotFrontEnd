var app = angular.module('app', ['angularUtils.directives.dirPagination']);
app.controller('BeerController', ['$scope','beer',function($scope, beer) {

    $scope.currentPage = 1;
    $scope.pageSize = 10;
    //Add beer data to scope
    onSuccess = function(data){
      var beers = data.sortBy('type'); 
      $scope.sortedBy = 'type';
      $scope.beers =beers;
    }
    onFailure = function(data){
     console.log('Error' + data);
    }
    beer.getBeer(onSuccess, onFailure);

      //Sort the json object
    $scope.sortProducts = function(column){
      if($scope.sortedBy.valueOf() === column.valueOf()){
        $scope.beers =$scope.beers.sortBy(column, true);
        $scope.sortedBy = "";
      }else{
        $scope.beers =$scope.beers.sortBy(column);
        $scope.sortedBy = column;
      }
      

    }
}]).directive("beerDirective", function(){
  return{
      templateUrl: "./js/Directives/beerDirective.html"
  };
});








