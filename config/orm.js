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
    update: function(table, col1, colval1, col2, condition, cb){

        let query = "Update ?? SET devoured = '1' WHERE ";

        // arr = []
        // recID = "'" + recID + "'";    
        // arr.push("ID" + "=" + recID);
        // arr.toString();

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