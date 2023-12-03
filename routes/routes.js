// routes
const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/', controller.getindex);
router.post('/update', controller.postUpdate);
// upload section 
router.get('/upload', controller.getindex1);
router.post('/update1', upload.single('file'), controller.postUpdate1);
module.exports = router;