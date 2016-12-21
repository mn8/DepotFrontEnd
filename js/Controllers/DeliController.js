var app = angular.module('app', ['angularUtils.directives.dirPagination']);
app.controller('DeliController', ['$scope','deli',function($scope, deli) {

    $scope.currentPage = 1;
    $scope.pageSize = 10;
    //Add deli data to scope
    onSuccess = function(data){
      var delis = data.sortBy('type'); 
      $scope.sortedBy = 'type';
      $scope.delis =delis;
    }
    onFailure = function(data){
     console.log('Error' + data);
    }
    deli.getDeli(onSuccess, onFailure);

      //Sort the json object
    $scope.sortProducts = function(column){
      if($scope.sortedBy.valueOf() === column.valueOf()){
        $scope.delis =$scope.delis.sortBy(column, true);
        $scope.sortedBy = "";
      }else{
        $scope.delis =$scope.delis.sortBy(column);
        $scope.sortedBy = column;
      }
      

    }
}]).directive("deliDirective", function(){
  return{
      templateUrl: "./js/Directives/deliDirective.html"
  };
});








