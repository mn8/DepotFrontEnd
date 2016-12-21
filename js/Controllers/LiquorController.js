var app = angular.module('app', ['angularUtils.directives.dirPagination']);
app.controller('LiquorController', ['$scope','liquor',function($scope, liquor) {
    $scope.currentPage = 1;
    $scope.pageSize = 10;

    onSuccess = function(data){
      var liquors = data.sortBy('name'); 
      $scope.sortedBy = 'name';
      $scope.liquors  =liquors;
    }
    onFailure = function(data){
     console.log('Error' + data);
    }
    liquor.getLiquor(onSuccess, onFailure);

        $scope.sortProducts = function(column){
      if($scope.sortedBy.valueOf() === column.valueOf()){
        $scope.liquors =$scope.liquors.sortBy(column, true);
        $scope.sortedBy = "";
      }else{
        $scope.liquors =$scope.liquors.sortBy(column);
        $scope.sortedBy = column;
      }
      

    }
}]).directive("liquorDirective", function(){
  return {
    templateUrl:"./js/Directives/liquorDirective.html"
  }
});