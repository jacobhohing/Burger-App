var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },

    insertOne: function(col1, col2, colValue1, colValue2) {
      orm.create(col1, col2, colValue1, colValue2, function(res) {
        cb(res);
      });
    },

    update: function(condition, cb) {
        orm.update("burgers", "devoured", '1', "id", condition, function(res) {
          cb(res);
        });
      },
  };


  module.exports = burger;