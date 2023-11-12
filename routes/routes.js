// routes
const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', controller.getindex);
router.post('/update', controller.postUpdate);


module.exports = router;