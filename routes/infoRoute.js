const express = require('express');
const router = express.Router();

router.get('/json', async (req,res) => {
    console.log('route json has fired')
    const communityNode = {
        "title": "OPES ADVENTURES",
        "summary": "Blockchain for the Venturous Soul",
        "website": "https://www.opesadventures.com/",
        "icon": "http://www.opesadventures.com/branding/icon.png",
        "producer_name": "opesadventures",
        "org": {
            "org_name": "OPES ADVENTURES",
            "email": "opesadventures@gmail.com",
            "branding": {
                "logo_256": "http://www.opesadventures.com/branding/logo256.png"
            },
            "location": {
                "name": "Junction City, OR, USA",
                "country": 840,
                "latitude": 44.219230,
                "longitude": -123.204690
            }
        },
        "nodes": {
            "node_type": "full"
        }
    };
    
    res.send(communityNode);
});

module.exports = router;