var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },

    insertOne: function(col1, col2, colValue1, colValue2) {
      orm.create(col1, col2, colValue1, colValue2, function(res) {
        cb(res);
      });
    },
  };

  //UpdateOne

  module.exports = burger;