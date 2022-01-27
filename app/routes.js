const express = require('express');
const router = express.Router();
const path = require('path');

//api routes
router.use('/api/user', require('../routes/user'));
router.use('/api/user', require('../routes/auth'));
router.use('/api/user', require('../routes/post'));
router.use('/api/user', require('../routes/profile'));
router.use('/api/upload', require('../routes/upload'));

// const __dirname = path.resolve()
router.use('/uploads', express.static(path.join(__dirname, '../uploads')))

router.get('/health', (_req, res) => {
    return res.status(200).json({
        msg: "Success"
    })
})

module.exports = router;