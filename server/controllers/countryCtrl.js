const Country = require('./../models/Country.js');

const getAll = (req, res) => {
    Country.getAll()
    .then(countries => res.json(countries));
};

module.exports = {
    getAll,
};