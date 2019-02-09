const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const hostname = 'localhost';
const port = 3001;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {

    res.send('OK');
});

app.get('/api', (req, res) => {

    res.send('{"teste":"testado"}');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});