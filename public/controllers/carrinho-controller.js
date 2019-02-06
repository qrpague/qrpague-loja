app.controller("CarrinhoController", function ($http, $scope, $rootScope, $location) {

    $scope.carrinho = $rootScope.carrinho
    console.log( $scope.carrinho )

    $scope.voltar = function () {
        $location.path('/');

    }
        
//{ indice: new Date(), dados: me.listaSanduiches[id] }


    $scope.finalizar = function () {

        let itensQrpague = []
        $scope.carrinho.forEach( item => {
            
            let produto = { indice : new Date() , dados : item }
            itensQrpague.push( produto )
        })

        $rootScope.order = {
            itens : itensQrpague ,
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


