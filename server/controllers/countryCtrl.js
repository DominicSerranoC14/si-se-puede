const Country = require('./../models/Country.js');

// Return all countries
const getAll = (req, res) => {
    Country.getAll()
    .then(countries => {
        res.statusCode = 200;
        res.json(countries);
    });
};

module.exports = {
    getAll,
};