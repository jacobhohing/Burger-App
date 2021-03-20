var express = require("express");


var router = express.Router();
var burger = require("../models/burger.js");


router.get("/", (req, res) => {
    burger.all(function(data) {
        var burgerObj = {
          burgers: data
        };
        console.log(burgerObj);
        res.render("index", burgerObj);
      })


  });

  router.put("/", function(req, res) {
    
    var recID = req.body.id
    var condition = "id = " + recID;
  
    console.log(condition);
    console.log(req.body);
  
    burger.update(condition, function(result) {

    });
  });

  module.exports = router;