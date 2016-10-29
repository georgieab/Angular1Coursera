(function () {
'use strict';

  angular.module('LunchCheck', [])
         .controller('LunchCheckController', LunchCheckController);

  // protect during minification
  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
     $scope.lunchList = "";
     $scope.message = "";

     $scope.checkLunchList = function () {

       var checkedOk = true;

       // Text field input is mandatory
       if ($scope.lunchList == "")
       {
         $scope.message = "Please enter data first"
         return
       }
       else {
         checkedOk = checkTheList();
         $scope.message = checkedOk ? "Enjoy" : "Too much!"
       }
     }

     function checkTheList() {
       var itemCount = 0;
       var items = $scope.lunchList.split(",");

       for (var x=0; x < items.length; x++) {
         if (items[x].trim() != ""){
           itemCount++;
         }
       }

      //  $scope.count = itemCount;

       return (itemCount <= 3) ? true : false;
     }
  }
})();
