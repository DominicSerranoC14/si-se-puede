const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
    name: String, 
    population: String,
});

// Query methods
countrySchema.statics.getAll = function() {
    return this.find();
};

module.exports = mongoose.model('country', countrySchema);