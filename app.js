const users = require('./users.js')
const express = require('express');
const session = require('express-session')
const bodyParser = require('body-parser');
const mustache = require('mustache-express');
const port = 3000;

const app = express();

app.engine('mustache', mustache());
app.set('views', './views');
app.set('view engine', 'mustache');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/login', function(req, res){
 res.render('login', users);
});

app.post('/login', function(req, res){
 let username = req.body.username;
 let password = req.body.password;
 // users.push(test);
 console.log(username + password);
});

app.listen(port, function(req, res){
 console.log('Starting express-session login app...');
});
