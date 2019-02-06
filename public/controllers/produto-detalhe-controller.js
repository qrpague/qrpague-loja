app.controller("ProdutoDetalheController", function ($scope, $rootScope,$location) {

   $scope.produto = $rootScope.produto


   $scope.comprar = function( ) {

    $rootScope.carrinho = $rootScope.carrinho || []  
    $rootScope.carrinho.push( $scope.produto )
    $location.path('carrinho');

   }
 
});


