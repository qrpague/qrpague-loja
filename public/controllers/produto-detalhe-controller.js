app.controller("ProdutoDetalheController", function ($scope, $rootScope,$location) {

   $scope.produto = $rootScope.produto
   $rootScope.isBanner = false 


   $scope.comprar = function( ) {

    $rootScope.carrinho = $rootScope.carrinho || []  
    $rootScope.carrinho.push( $scope.produto )
    $location.path('carrinho');

   }
 
});


