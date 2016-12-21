var app = angular.module('app', ['angularUtils.directives.dirPagination']);
app.controller('DrinkController', ['$scope','drink',function($scope, drink) {
    $scope.currentPage = 1;
    $scope.pageSize = 10;

    onSuccess = function(data){
      var drinks = data.sortBy('name'); 
      $scope.sortedBy = 'name';
      $scope.drinks  =drinks;
    }
    onFailure = function(data){
     console.log('Error' + data);
    }
    drink.getDrink(onSuccess, onFailure);

    $scope.sortProducts = function(column){
      if($scope.sortedBy.valueOf() === column.valueOf()){
        $scope.drinks =$scope.drinks.sortBy(column, true);
        $scope.sortedBy = "";
      }else{
        $scope.drinks =$scope.drinks.sortBy(column);
        $scope.sortedBy = column;
      }
      

    }
}]).directive("drinkDirective", function(){
  return {
    templateUrl:"./js/Directives/drinkDirective.html"
  }
});