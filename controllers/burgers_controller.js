var express = require("express");


var router = express.Router();
var burger = require("../models/burger.js");


router.get("/", (req, res) => {
    burger.all(function(data) {
        var burgerObj = {
          burgers: data
        };
        res.render("index", burgerObj);
    })
});

router.post("/", function(req, res) {
    
    var newVal = req.body.burger
    burger.create(newVal, function(result) {
    
    });
  });

router.put("/", function(req, res) {
    
    var recID = req.body.id
    var condition = "id = " + recID;
  
    burger.update(condition, function(result) {

    });
});

  module.exports = router;