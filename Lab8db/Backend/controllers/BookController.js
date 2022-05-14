const express = require("express");
var router = express.Router();
var ObjId = require('mongoose').Types.ObjectId;
var { Books } = require("../models/Books");

// * Get all *
router.get("/", (req, res) => {
  Books.find((err, docs) => {
      if(!err) {res.send(docs); }
      else {console.log('Error in get(/Books)');}
  });
});
// * Get by id *
router.get('/:id', (req, res) =>{
  if(!ObjId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`)

  Books.findById(req.params.id, (err, doc) => {
    if(!err) {res.send(doc);}
    else { console.log('Error in return Book!');}
  })
})
// * Create *
router.post("/", (req, res) =>{
  var bks = new Books({
    name: req.body.name,
    author: req.body.author,
    year: req.body.year,
    genre: req.body.genre
  })
  bks.save((err, doc) =>{
    if(!err) {res.send(doc); }
    else{console.log('Error in Books Save!');}
  });
})
// * Edit document *
router.put("/:id", (req, res) =>{
  if(!ObjId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`)

    var bks = {
      name: req.body.name,
      author: req.body.author,
      year: req.body.year,
      genre: req.body.genre
    };

    Books.findByIdAndUpdate(req.params.id, {$set: bks}, {new: true}, (err, doc) =>{
      if(!err){res.send(doc);}
      else {console.log('Error in book Update!');}
    });
})
// ! Delete document !
router.delete("/:id", (req, res) =>{
  if(!ObjId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`)

    var bks = {
      name: req.body.name,
      author: req.body.author,
      year: req.body.year,
      genre: req.body.genre
    };

    Books.findByIdAndRemove(req.params.id, (err, doc) =>{
      if(!err){res.send(doc);}
      else {console.log('Error in book Update!');}
    });
})

module.exports = router;
