var app = angular.module('app', ['angularUtils.directives.dirPagination']);
app.controller('WineController', ['$scope','wine',function($scope, wine) {

    $scope.currentPage = 1;
    $scope.pageSize = 10;
    //Add wine data to scope
    onSuccess = function(data){
      var wines = data.sortBy('type'); 
      $scope.sortedBy = 'type';
      $scope.wines =wines;
    }
    onFailure = function(data){
     console.log('Error' + data);
    }
    wine.getWine(onSuccess, onFailure);

      //Sort the json object
    $scope.sortProducts = function(column){
      if($scope.sortedBy.valueOf() === column.valueOf()){
        $scope.wines =$scope.wines.sortBy(column, true);
        $scope.sortedBy = "";
      }else{
        $scope.wines =$scope.wines.sortBy(column);
        $scope.sortedBy = column;
      }
      

    }
}]).directive("wineDirective", function(){
  return{
      templateUrl: "./js/Directives/wineDirective.html"
  };
});








