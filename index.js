const express = require('express');
const path = require('path');
const pokeData = require('./data/pokedex.json');
const typeData = require('./data/types.json');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('dex')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});