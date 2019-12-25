/* Template file for SQLite DB. The test function is inside Journal.js
 * This file should be removed later.
*/
import SQLite from "react-native-sqlite-2";

const db = SQLite.openDatabase("test.db", "1.0", "Test Database", 1);
db.transaction(function(txn) {
    // Since we are testing, delete the table if it currently exists in the database
    txn.executeSql("DROP TABLE IF EXISTS Users", []);
    txn.executeSql(
        "CREATE TABLE IF NOT EXISTS Users(user_id INTEGER PRIMARY KEY NOT NULL, name VARCHAR(30))",
        []
    );

    // Insert dummy value names into our database
    txn.executeSql("INSERT INTO Users (name) VALUES (:name)", ["nora"]);
    txn.executeSql("INSERT INTO Users (name) VALUES (:name)", ["yang"]);

    // Print out the entries in our table currently
    txn.executeSql("SELECT * FROM Users", [], function(tx, res) {
        for (let i = 0; i < res.rows.length; ++i) {
            console.log("entry: ", res.rows.item(i));
        }
    });
});