
app.controller("ChatRoboController", function ($http, $scope, $rootScope, $location, $window ) {
 

    $scope.msg
    $scope.conversas = [
        { msg : "Ola !"  , data : new Date() }
    ]


    $scope.enviar = function( ) {
        if ( !$scope.msg ) {
            return console.log( "msg invalida")
        }
        $scope.conversas.push( { msg : $scope.msg } )
        requestSicoobRobot( $scope.msg )
    }
 


});


function requestSicoobRobot (textMsg ) {
    
     let protocol = 1
    let msg = { msg : textMsg , rcpID: protocol }


    MqttClient.send(MQTT_SUBSCRIBE_TOPIC_CHAT + protocol + MQTT_PATH_PROTOCOLO_MESSAGE_IN, msg)

    let onMsg = (m) => { 
        $scope.conversas.push( { msg : m } )
     }

    let onError = (e) =>{ console.error( e )}
    
    MqttClient.register(MQTT_SUBSCRIBE_TOPIC_CHAT + protocol + MQTT_PATH_PROTOCOLO_MESSAGE_OUT, { onMessageArrived: onMsg , onConnectionLost : onError  })



}
