const NodeJSON = require('../public/nodeJSON');
const express = require('express');
const router = express.Router();

router.get('/json', async (req,res) => {
    console.log('route json has fired')
    res.send(NodeJSON);
});

module.exports = router;
