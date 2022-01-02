const express = require('express');
const router = express.Router();

router.get('/health', (_req, res) => {
    return res.status(200).json({
        msg: "Success"
    })
})

module.exports = router;