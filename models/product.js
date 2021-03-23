var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var productSchema = new Schema({

  name: { type: String, Required:  'field cannot be left empty.' },

  email:    { type: String,     Required:  'field cannot be left empty.'},

  phone_number: { type: String ,    Required:  'Pfield cannot be left empty'},
  
  title: {type : String, Required: 'field cannot be left empty' }

});

module.exports = mongoose.model('Products', productSchema);