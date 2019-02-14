
app.controller("ChatRoboController", function ($http, $scope, $rootScope, $location, $window ) {
 
 
    $scope.msg
    $scope.conversas = [
        { msg : "Ola !" , robot : true  , data : new Date() }
    ]


    $scope.enviar = function( ) {
        if ( !$scope.msg ) {
            return console.log( "msg invalida")
        }
        $scope.conversas.push( { msg : $scope.msg ,  robot : false  } )
        requestSicoobRobot( $scope.msg )
        $scope.msg = ""
    }
 
    let onMsg = (m) => { 
        let msg = JSON.parse(  m.payloadString );
        msg.robot = true;
        $scope.conversas.push( msg )
        $scope.$apply();

        updateLista()

     }

    let onError = (e) =>{ console.error( e )}
    
    MqttClient.register(MQTT_SUBSCRIBE_TOPIC_CHAT + connectApp.idTerminal + MQTT_PATH_PROTOCOLO_MESSAGE_OUT, { onMessageArrived: onMsg , onConnectionLost : onError  })
    MqttClient.register(MQTT_SUBSCRIBE_TOPIC_CHAT + connectApp.idTerminal + MQTT_PATH_PROTOCOLO_MESSAGE_IN, { })



});


function requestSicoobRobot (textMsg ) {
    
    
    let msg =   JSON.stringify( { msg : textMsg , rcpID: connectApp.idTerminal } )

    MqttClient.send(MQTT_SUBSCRIBE_TOPIC_CHAT + connectApp.idTerminal + MQTT_PATH_PROTOCOLO_MESSAGE_IN, msg)
    updateLista()

     

}

function updateLista() {
    setTimeout( function(){    $(".chat-robot").scrollTop( $('.chat-robot').height()) },200)
}
