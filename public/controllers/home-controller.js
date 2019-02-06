 app.controller("HomeController" , function($http, $scope, $rootScope, $location) {

    $scope.produtos = []
    $rootScope.produtos = []   
    $rootScope.isBanner = true

    conectarSocket( function( event ) {
        console.log("Socket event", event)
    });


    $scope.detail = function( item ) {
        $rootScope.produto = item
        $location.path('produto-detalhe');
    }
    $scope.requestProdutos = function(){

        
        var rest = {
            method: 'GET',
            url: connectApp.loja_url + "/produtos",
            headers: { 'Content-Type': 'application/json' },
            data: {}
        }
    
        $http(rest).then( (result, error )=> {
            if ( error ) {
                console.log( "PRODUTO GET", error)
                return Msg( "Erro consulta produtos")
            }
            $scope.produtos = result.data
         })
    
    }

    $scope.requestProdutos()



  
   
});


