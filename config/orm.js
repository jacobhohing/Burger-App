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
    insertOne: function(col1, col2, colValue1, colValue2){
        let query = "INSERT INTO burgers (??, ??) VALUES(??,??)";
        connection.query(query, [col1, col2, colValue1, colValue2], (err, results) => {
            if(err) console.log(err);
            console.log(results);
        });
    },
    updateOne: function(){
        let query = "";
        connection.query(query, [], (err, results) => {
            if(err) console.log(err);
            console.log(results);
        });
    },   

    closeConnection: function(){
        connection.end();
    }
};