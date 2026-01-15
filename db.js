const mysql = require("mysql2");

const db = mysql.createconnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "school_management"
});

bodyParser.connect((err) => {
    if (err) {
        console.error("Error connecting to the database:", err);
    } else {
        console.log("Connected to the database.");
    }
});
module.exports = db;