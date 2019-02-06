
let Config = require( global.pathRootApp + '/tools/config')


let produtos = [

      { id: 1, titulo: 'Smartphone LG K10 Novo Dual Chip Android 7.0 Tela 5,3" 32GB 4G 13MP - Preto', valor: 699.00, url: Config.GATEWAY_IMAGE +'images/p1.png', thumb: Config.GATEWAY_IMAGE +'images/thumb.png' },
      { id: 2, titulo: 'Smartphone LG K10 Novo Dual Chip Android 7.0 Tela 5,3" 32GB 4G 13MP - Preto', valor: 699.00, url:  Config.GATEWAY_IMAGE +'images/p2.png', thumb: Config.GATEWAY_IMAGE +'images/thumb.png' },
      { id: 3, titulo: 'Smartphone LG K10 Novo Dual Chip Android 7.0 Tela 5,3" 32GB 4G 13MP - Preto', valor: 699.00, url:  Config.GATEWAY_IMAGE +'images/p3.png', thumb: Config.GATEWAY_IMAGE +'images/thumb.png'},
      { id: 4, titulo: 'Smartphone LG K10 Novo Dual Chip Android 7.0 Tela 5,3" 32GB 4G 13MP - Preto', valor: 699.00, url:  Config.GATEWAY_IMAGE +'images/p4.png', thumb: Config.GATEWAY_IMAGE +'images/thumb.png'},
 
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


