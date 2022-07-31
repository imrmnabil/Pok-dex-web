const express = require('express');
const path = require('path');
const pokeData = require('./data/pokedex.json');
const typeData = require('./data/types.json');
const app = express();
const port = process.env.PORT ||5000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/pokemon/:iD', (req, res) => {
    const Index = parseInt(req.params.iD) - 1;
    if (Index >= 0 && Index < 809) {
        const pokeInfo = pokeData[Index]
        res.render('dex', { ...pokeInfo })
    }
    else {
        res.render('notfound')
    }
});

app.get('/', (req, res) => {
    let pageNo = 1;
    res.render('home',{pokeData,pageNo});

});

app.get('/page/:pg', (req, res) => {
    let pageNo = 1;
    try {
        if(req.params.pg){
            pageNo = parseInt(req.params.pg);
        }
        res.render('home',{pokeData,pageNo});

    }
    catch(e){
        console.log(e);
        res.render('home',{pokeData,pageNo});
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
