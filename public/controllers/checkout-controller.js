app.controller("CheckoutController", function ($http, $scope, $rootScope, $location) {

    $scope.order = $rootScope.order
    $scope.stringQrcode = undefined
    $rootScope.isBanner = false 

    let sizeQrcode = (window.innerHeight > 700) ? 256 : 150
    let options = {
        width: sizeQrcode,
        height: sizeQrcode,
        text: '',
        colorDark: "#000000",
        colorLight: "#ffffff"
    }
 
    let qrcode = new QRCode(document.getElementById("qrcode"), options)


    $scope.criarOrdemPagamentoDigital = function(){

        
        var rest = {
            method: 'POST',
            url: connectApp.loja_url + "/qrcode",
            headers: { 'Content-Type': 'application/json' },
            data: $scope.order
        }
    
        $http(rest).then( (result, error )=> {
            if ( error ) {
                console.log( "PRODUTO GET", error)
                return Msg( "Erro consulta produtos")
            }
            $scope.stringQrcode = result.data
            qrcode.clear();
            qrcode.makeCode($scope.stringQrcode);         
        })
    
    }
    $scope.result = function(){
        $location.path('checkout-result');
    }
    $scope.criarOrdemPagamentoDigital()


});


