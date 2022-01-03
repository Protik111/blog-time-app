const express = require('express');
const router = express.Router();

//api routes
router.use('/api/user', require('../routes/user'));

router.get('/health', (_req, res) => {
    return res.status(200).json({
        msg: "Success"
    })
})

module.exports = router;