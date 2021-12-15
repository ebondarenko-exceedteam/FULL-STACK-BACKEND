const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chargesScheme = new Schema({
  date: String,
  where: String,
  howMany: Number,
});


module.exports = Charges = mongoose.model('charges', chargesScheme);