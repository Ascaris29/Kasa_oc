const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("bienvenue sur le serveur CORS");
})

app.get('/cors', (req, res) => {
    res.send('This has CORS enabled 🎈')
})

app.listen(8080, () => {
    console.log("listening on port 8080");
})