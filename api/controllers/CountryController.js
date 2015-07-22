/**
 * CountryController
 *
 * @description :: Server-side logic for managing countries
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getCountries: function(req, res) {
        Country.find().exec(function(err, result){
            return res.send(result);
        });
    },
    addCountry : function (req, res){
        Country.create({name: req.param('name')}).exec(function (err, result){            
            return res.send(result);
        });
    }
};

