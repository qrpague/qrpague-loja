var mqtts = []
class MqttClient {


    static register(tag, options) {

        return new Promise(resolve => {


            MqttClient.unregister(tag)

            let clientId = "sicoob" + ('' + Math.random() * 10).replace('.', '')

            let client = new Paho.MQTT.Client(connectApp.MQTT_HOST, Number(connectApp.MQTT_PORT), clientId);
            if (options) {
                client.onConnectionLost = options.onConnectionLost || ((d) => { })
                client.onMessageArrived = options.onMessageArrived || ((d) => { })
            }
            client.connect({
                onSuccess: function () {

                    console.log("onConnect");
                    client.subscribe(tag);
                    if (options && options.msg) {
                        let message = new Paho.MQTT.Message(options.msg);
                        message.destinationName = tag
                        client.send(message);
                    }

                    resolve({});

                }
            });
            client.tag = tag
            mqtts.push(client)

        })
    }
    static unregister(tag, options) {
        try {
            let client = mqtts.find((c) => { c.tag === tag })
            client ? client.unsubscribe(tag, {}) : 0
        } catch (error) {
            console.log(error)
        }
    }
    static send(tag, msg, count) {
        try {
            // let waitNow = true;
            // count =  count || 0
            let client = mqtts.find((c) => { return c.tag === tag })
            if (!client) {
                console.log("not client paho register")
                MqttClient.register(tag, { options: { msg: msg } })

            } else {
                let message = new Paho.MQTT.Message(msg);
                message.destinationName = tag
                client.send(message);
            }

        } catch (error) {
            console.log(error)
        }
    }



}


const MQTT_SUBSCRIBE_CANAL = "/Sicoob/"
const MQTT_SUBSCRIBE_TOPIC_CHAT_REQUEST = "/Sicoob/chat/request"
const MQTT_SUBSCRIBE_TOPIC_CHAT = "/Sicoob/chat/"

const MQTT_PATH_MESSAGE = "/message"

const MQTT_PATH_PROTOCOLO_MESSAGE_CLIENTE = "/message/cliente"
const MQTT_PATH_PROTOCOLO_MESSAGE_ATENDENTE = "/message/atendente"

const MQTT_PATH_PROTOCOLO_STATUS_CLIENTE = "/message/status/cliente"
const MQTT_PATH_PROTOCOLO_STATUS_ATENDENTE = "/message/status/atendente"

const MQTT_PATH_STATUS_ATENDENTE =  "/status/atendente"

 
const MQTT_PATH_BOT = "/bot"
