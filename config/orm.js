var connection = require("../config/connection.js");

module.exports = {

    all: function(table, cb){
        let query = "SELECT * FROM ??";
        connection.query(query, [table], (err, results) => {
            if(err) console.log(err);
            console.log(results);
            cb(results);
        });
    },
    create: function(table, val1, cb){
        let query = "INSERT INTO ?? (devoured, burger_name) VALUES('0', ";
        let val = "'" + val1 + "')";
        let queryString = query + val

        connection.query(queryString, [table], (err, results) => {
            if(err) console.log(err);
            console.log(results);
            cb(results);
        });
    },
    update: function(table, condition, cb){

        let query = "Update ?? SET devoured = '1' WHERE ";
        let queryString = query + condition
        
        connection.query(queryString, [table], (err, results) => {
            if(err) console.log(err);
            console.log(results);
            cb(results);
        });
    },   

    closeConnection: function(){
        connection.end();
    }
};