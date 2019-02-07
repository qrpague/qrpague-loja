'use strict';

let Produtos = require(global.pathRootApp + '/models/produtos-model');
let socket = require(global.pathRootApp + '/tools/websocket-server');

 
module.exports = {
 
	create: async function (req, res, next) {

		try {
			let produto = req.body
			if (!produto) {
				return next('QRPAGUE_VAREJISTA_WEB_QRCODE_PARAMS_EMPTY')
			}
		 
			return res.status(200).send({});
		} catch (error) {
			return next('QRPAGUE_VAREJISTA_WEB_ERROR_CATCH'+ error)
		}

	},

	detail: async function (req, res, next) {
		try {	

			let uuid = req.params.uuid

			let lista = Produtos.list()
			item = lista.find ( i => { return i.id == uuid } )
			return res.status(200).send(item);


		} catch (error) {
			return next('QRPAGUE_VAREJISTA_WEB_ERROR_CATCH'+ error)
		}
	},

	list: async function (req, res, next) {
		try {	
			  
			return res.status(200).send(Produtos.list());

		} catch (error) {
			return next('QRPAGUE_VAREJISTA_WEB_ERROR_CATCH'+ error)

		}
	}}


