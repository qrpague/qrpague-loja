
var connectApp =
{

  toUrl: function () {
    if (this.protocol)
      return this.protocol + "://" + this.host + ':' + this.port + '/loja';
    else
      return "http://" + this.host + ':' + this.port + '/loja';
  },

  toUrlWebsocket: function () {
    return (this.protocol == 'https' ? 'wss://' : "ws://") + this.hostWebsocket;
  }
};


connectApp.protocol = 'http';
connectApp.host = '0.0.0.0';
connectApp.port = '9093';
connectApp.websocket_url = 'ws://0.0.0.0:4000';
connectApp.loja_url = "http://0.0.0.0:9094/loja"

connectApp.url_sms_gateway = 'https:/lab.sicoobnet.com.br/sms';

connectApp.idTerminal = Math.floor((Math.random() * 99999) + 1)
connectApp.terminal = {
  "idTerminal": connectApp.idTerminal,
  "descricao": "Terminal  " + connectApp.idTerminal,
  "uf": "DF",
  "cep": "70000-000",
  "latitudeTerminal": "-15.7801",
  "longitudeTerminal": "-47.9292,",
  "empresa_logomarca" : "static/payment_company_icon.svg",
  "empresa_nome" : "Mercado Rapido"
}


connectApp.MQTT_HOST = "10.222.18.110"
connectApp.MQTT_PORT = 9001
$(document).ready(function () {
  $(".tabs-menu a").click(function (event) {
    event.preventDefault();
    $(this).parent().addClass("current");
    $(this).parent().siblings().removeClass("current");
    var tab = $(this).attr("href");
    $(".tab-content").not(tab).css("display", "none");
    $(tab).fadeIn();
  });
});

