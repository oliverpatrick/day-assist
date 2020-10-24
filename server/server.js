const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const recipes = './data/recipes.json';

app.use(cors());

app.get('/api/recipes', (req, res) => {
    fs.readFile(recipes, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
    res.send(JSON.parse(data));
    });
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`)