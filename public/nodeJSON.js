const NodeJSON = {
  "schema": "https://opes-community.github.io/data-schemas/self-desc/jsonschema/1-0-0#",
  "community_node_account_name": "adventures",
  "org": {
    "display_name": "OPES Adventures",
    "website": "https://www.opesadventures.com",
    "summary": "Blockchain for the Venturous Soul",
    "title": "OPES Adventures",
    "pledge_to_opes_ecosystem": "Blockchain for the Venturous Soul",
    "email": "opesadventures@protonmail.com",
    "branding":{
      "sphere_256": "https://opes-adventure-api.herokuapp.com/branding/logo256",
      "sphere_1024": "",
      "sphere_svg": ""
    },
    "location": {
      "name": "Junction City, Oregon",
      "country": "United States of America",
      "latitude":  44.219230,
      "longitude": -123.204690
    },
    "social": {
      "linkedin": "",
      "instagram": "",
      "snapchat": "",
      "steemit": "",
      "twitter": "",
      "youtube": "",
      "facebook": "",
      "github": "",
      "reddit": "",
      "keybase": "",
      "telegram": "",
      "wechat": ""
    }
  },
  "nodes": [
    {
      "location": {
        "name": "San Francisco",
        "country": "USA",
        "latitude":  37.774929,
        "longitude": -122.419418
      },
      "node_type": "infra",
      "p2p_endpoint": "",
      "bnet_endpoint": "",
      "api_endpoint": "",
      "ssl_endpoint": ""
    },
    {
      "location": {
        "name": "",
        "country": "",
        "latitude": 0,
        "longitude": 0
      },
      "node_type": "seed",
      "p2p_endpoint": "",
      "bnet_endpoint": "",
      "api_endpoint": "",
      "ssl_endpoint": ""
    }
  ]
};

module.exports = NodeJSON;
