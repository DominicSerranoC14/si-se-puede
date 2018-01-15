const { Router } = require('express');
const router = Router();
const { getAll } = require('./../controllers/countryCtrl.js');

// Get all countries
router.get('/countries', getAll);

module.exports = router;