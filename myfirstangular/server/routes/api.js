const express = require('express');
const router = express.Router();

const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

router.get('/', (req,res) => {
    res.send('All working here....');
});

router.get('/posts', (req, res) => {
    axios.get(`${API}/posts`)
        .then(posts => {
            res.status(200).json(posts.data);
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

module.exports = router;