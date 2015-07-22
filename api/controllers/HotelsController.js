/**
 * HotelsController
 *
 * @description :: Server-side logic for managing hotels
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getHotelsInCountry: function(req, res) {
		Hotels.find({country: req.param("country")}).exec(function(err, result) {
			return res.send(result);
		});
	},
	addHotelInCountry: function(req, res) {
		Hotels.create({name: req.body.name, country: req.param("country"), description: req.body.description}).exec(function(err, result) {
				return res.send(result);
		});		
	},
	deleteHotelById : function(req, res) {
		Hotels.findOne({id: req.param("id")}).exec(function(err, result) {
			Hotels.destroy({id: req.param("id")}).exec(function(error, result) {
				return res.send("Deleted");
			});			
		});
	},
	getHotelById: function(req, res) {
		Hotels.findOne({id: req.param("id")}).exec(function(err, result) {
			return res.send(result);
		});
	},
	updateHotelById: function(req, res) {
		var request = {};
		request.name = req.body.name;
		request.description = req.body.description;
					
		Hotels.update({id: req.param("id")}, request).exec(function(err, result) {
			return res.send(result);
		});				
	}
};

