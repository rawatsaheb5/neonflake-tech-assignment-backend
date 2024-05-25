// routes/uploadRoutes.js
const express = require('express');
const { handleUpload, handleGetVideo, handleGetAllVideo } = require('../controller/upload');
const { upload } = require('../config/cloudinary');



const router = express.Router();

router.post('/upload', upload.fields([{ name: 'thumbnail' }, { name: 'video' }]), handleUpload);
router.get('/video/:id', handleGetVideo);
router.get('/video', handleGetAllVideo);
module.exports = router;
