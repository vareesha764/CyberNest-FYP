const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('CyberNest MDM System is Running!');
});

console.log("CyberNest Backend initialized successfully.");