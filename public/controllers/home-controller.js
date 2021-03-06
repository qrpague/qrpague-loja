
 app.controller("HomeController" , function($window, $http, $scope, $rootScope, $location) {

    $scope.produtos = []
    $rootScope.produtos = []   
    $rootScope.isBanner = true
    
    $rootScope.sicoobChatWeb = true

    conectarSocket( function( event ) {
         console.log("Socket event", event)

         $rootScope.$broadcast('websocketEvent',event );

    });


    $scope.detail = function( item ) {
        $rootScope.produto = item
 
        $location.url('produto-detalhe?produto='+ JSON.stringify(item));
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
            $rootScope.produtos = result.data
         })
    
    }
    
    $scope.go_back = function(){
        $window.history.back();
    }
    $scope.home = function() {
        $location.url('/');
    }
    $scope.requestProdutos()



  
   
});


