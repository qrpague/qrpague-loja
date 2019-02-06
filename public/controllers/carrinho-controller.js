app.controller("CarrinhoController", function ($http, $scope, $rootScope, $location) {

    $scope.carrinho = $rootScope.carrinho
    console.log( $scope.carrinho )

    $scope.voltar = function () {
        $location.path('/');

    }

    $scope.finalizar = function () {
        $rootScope.order = {
            itens : { dados :  $scope.carrinho },
            valor : $scope.total(),
            terminal: connectApp.terminal

        }

        $location.path('checkout');

    }
    $scope.total = function(){
        let total = 0

        $scope. carrinho.forEach( produtos =>{
            total = total + produtos.valor
        })

        return truncateNumber(total,2) 
    }
});


