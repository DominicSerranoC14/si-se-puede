const { Router } = require('express');
const router = Router();
const { getAll } = require('./../controllers/countryCtrl.js');

// Country endpoints
router.get('/countries', getAll);

module.exports = router;