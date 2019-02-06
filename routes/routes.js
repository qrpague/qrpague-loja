let express = require('express')
let QrcodeController = require( global.pathRootApp + '/controllers/controller')
let ProdutoController = require( global.pathRootApp + '/controllers/produto-controller')


const router = express.Router();


router.route('/qrcode').post(QrcodeController.create); 
router.route('/qrcode:uuid').get(QrcodeController.detail); 
router.route('/qrcode/notification').post(QrcodeController.notification); 

router.route('/produtos').get(ProdutoController.list); 
router.route('/produtos/:uuid').get(ProdutoController.detail); 
router.route('/produtos').post(ProdutoController.create); 


module.exports = router;
