(function (){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
     $scope.message = "";
     $scope.displayMsg = function (){
        if ( $scope.foodlist === "" ){
            return $scope.message = "Please enter data first";
        }
        var f_list= $scope.foodlist.split(",");
        if ( f_list.length <= 3 && f_list.length > 0){
          return $scope.message = "Enjoy!";
        }
        if ( f_list.length >3){
          return $scope.message = "Too much!";
        }
    };
}

})();
