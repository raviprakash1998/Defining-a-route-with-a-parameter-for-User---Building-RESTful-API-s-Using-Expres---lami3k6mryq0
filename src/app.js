const express = require('express');
const app = express();

app.get('/user/42', (req, res) => {
  //Write a code here for endpoint /user/:userId and also print parameter in json form
  const user = {
    userId = req.params.userId;
  }
   res.json(user); 
});

module.exports = app;
