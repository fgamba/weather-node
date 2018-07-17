const express = require('express');
const app = express();
app.use(express.static( __dirname + '/public' ));
const hbs = require('hbs');
const helper = require('./hbs/helpers');
const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.get('/',  (req, res) => {
    res.render('home', {
        //name: 'Fernando'
    })
});
app.get('/about',  (req, res) => {
    res.render('about');
});
app.post('/', (req, res) => {
    
    res.render('home', {
        //name: 'Fernando'
    })
    
});
app.listen(port);
console.log(`Listening on port ${port}`);
