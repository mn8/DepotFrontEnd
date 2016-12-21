var app = angular.module('app', ['angularUtils.directives.dirPagination']);
app.controller('TobaccoController', ['$scope','tobacco',function($scope, tobacco) {
    $scope.currentPage = 1;
    $scope.pageSize = 10;

    onSuccess = function(data){
      var tobaccos = data.sortBy('name'); 
      $scope.sortedBy = 'name';
      $scope.tobaccos  =tobaccos;
    }
    onFailure = function(data){
     console.log('Error' + data);
    }
    tobacco.getTobacco(onSuccess, onFailure);

    $scope.sortProducts = function(column){
      if($scope.sortedBy.valueOf() === column.valueOf()){
        $scope.tobaccos =$scope.tobaccos.sortBy(column, true);
        $scope.sortedBy = "";
      }else{
        $scope.tobaccos =$scope.tobaccos.sortBy(column);
        $scope.sortedBy = column;
      }
      

    }
}]).directive("tobaccoDirective", function(){
  return {
    templateUrl:"./js/Directives/tobaccoDirective.html"
  }
});