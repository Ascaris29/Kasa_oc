const express = require('express');
const app = express();

app.get('/', (req, res =>{
    res.send("bienvenue sur le serveur CORS");
}))

