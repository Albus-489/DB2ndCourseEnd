const express = require("express");
var router = express.Router();

var { Books } = require("../models/Books");

router.get("/", (res, req) => {
  Books.find((err, docs) => {
      if(!err) {res.send(docs); }
      else {console.log('Error in get(/Books): ' + JSON.stringify(err, undefined, 2));}
  });
});

module.exports = router;
