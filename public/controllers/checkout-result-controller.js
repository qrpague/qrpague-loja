 app.controller("CheckoutResultController",  function ($http, $scope, $rootScope, $location) {

    $rootScope.isBanner = false 


    
    $scope.home = function() {
        $location.url('/');
    }



});


