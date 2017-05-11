(function(){
    'use strict';

    angular.module('LunchCheck',[])
    .controller('LunchCheckController',LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
    
    function LunchCheckController($scope){
        $scope.lunchItems = "";
        $scope.checkOutcome = function(){
            $scope.message = checkOutcomes($scope.lunchItems);
        };
        
        
        function checkOutcomes(string){
            if(string.length == 0){return "Enter a value";}
            var arrayOfStrings = string.split(",");
            var len = arrayOfStrings.length;
            if (len<=3)
            {
               return "Enjoy!";
            }
            
            else
            {
                return "Too much!"
            }
        };
    };

    
})();