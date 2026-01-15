const express = require('express');
const app = express();
const port = 3000;
app.get("/", (req,res) => {
  res.send("Welcome to our server this is mugengana kelly dickson");
});
app.get("/users", (req,res) => {
  db.excute("SELECT * FROM users", (err, results) => {
    if (err) {
      console.error("Error executing querry:", err);
      res.status(500).send('internal server error');
      return;
    }
    res.json(results);
  })
})
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



