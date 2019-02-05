 app.controller("HomeController" , function($scope) {

    var me = this;
    var escopo = $scope;
   

    conectarSocket( function( event ) {
        console.log("Socket event", event)
    });
 
  
   
});


