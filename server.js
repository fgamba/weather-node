const express = require('express');
const app = express();
const axios = require('axios');
app.use(express.static( __dirname + '/public' ));
const hbs = require('hbs');
const helper = require('./hbs/helpers');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.get('/',  (req, res) => {
    res.render('home');
});
app.get('/about',  (req, res) => {
    res.render('about');
});
app.post('/', (req, res) => {
    let body = req.body;
    let city = body.city;
    console.log(city);
    
    let temp = axios.get(`api.openweathermap.org/data/2.5/weather?q=${city},AR&units=metric&appid=73156abd4f78c03e6099d52868f3cd07`)
                .then( function (response) {
                    
                    return response.data.main.temp;
                })
                .catch(function (error) {
                    console.log(error)
                });
    
    
    //weather api: 73156abd4f78c03e6099d52868f3cd07
    //api.openweathermap.org/data/2.5/weather?q=Santa+Fe,AR&units=metric&appid=73156abd4f78c03e6099d52868f3cd07
    
    res.render('home', {
        city,
        temp
        
    })
    
});
app.listen(port);
console.log(`Listening on port ${port}`);
