/**
 * BadController
 *
 * @description :: Server-side logic for managing bads
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	badReq: function (req, res) {
		res.badRequest("bad request");
	},
	badReqTemplate: function(req, res){
		res.statusCode = 400;
		res.view("badTemplate", {message: "This is the message from controller"})
	},
	notFound: function(req, res) {
		res.statusCode = 404;
   		res.end("Not found!");
	}
};

