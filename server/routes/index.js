const { Router } = require('express');
const router = Router();
const { getAll } = require('./../controllers/countryCtrl.js');

router.get('/api/v1/countries', getAll);

module.exports = router;