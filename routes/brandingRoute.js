const express = require('express');
const router = express.Router();
const path = require('path');
const _dirname = path.resolve();

router.get('/icon', async (req,res) => {
    res.sendFile('public/icon.png',{ root: _dirname});
});

router.get('/logo256', async (req,res) => {
    //console.log(_dirname);
    res.sendFile('public/logo256.png',{ root: _dirname});
});

module.exports = router;