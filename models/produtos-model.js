
let Config = require( global.pathRootApp + '/tools/config')


let produtos = [

      { id: 1, titulo: 'Smartphone LG M99 Novo Dual Chip Android 8.0 Tela 5,3" 32GB 4G 13MP - Preto', valor: 699.90, url: Config.GATEWAY_IMAGE +'images/p1.png', thumb: Config.GATEWAY_IMAGE +'images/thumb.png' },
      { id: 2, titulo: 'Smartphone Motorola Z2 Novo Dual Chip Android 9.0 Tela 5,3" 62GB 4G 13MP - Prata', valor: 1290.50, url:  Config.GATEWAY_IMAGE +'images/p2.png', thumb: Config.GATEWAY_IMAGE +'images/thumb.png' },
      { id: 3, titulo: 'Smartphone Motorola Novo Dual Chip Android 8.0 Tela 5,3" 32GB 4G 13MP - Preto', valor: 839.99, url:  Config.GATEWAY_IMAGE +'images/p3.png', thumb: Config.GATEWAY_IMAGE +'images/thumb.png'},
      { id: 4, titulo: 'Smartphone LG K10 Novo Dual Chip Android 7.0 Tela 4,0" 16GB 4G 13MP - Preto', valor: 501.50, url:  Config.GATEWAY_IMAGE +'images/p4.png', thumb: Config.GATEWAY_IMAGE +'images/thumb.png'},
 
]

module.exports = {



      list: function (req, res, next) {

            try {

                  return produtos
            } catch (error) {
                  return next('QRPAGUE_VAREJISTA_WEB_ERROR_CATCH' + error)
            }

      }


}


