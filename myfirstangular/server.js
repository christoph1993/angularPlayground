const express = require('express');
const path = require('path');
const http = require('http');
const body_parser = require('body-parser');

const api = require('./server/routes/api');

const app = express();

app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'dist')));

app.use('/api', api);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || 3005;
app.set('port', port);

app.listen(port, ()=> console.log(`All running on localhost:${port}`));