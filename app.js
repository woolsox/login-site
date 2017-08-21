const express = require('express');
const expressSession = require('express-session')
const mustache = require('mustache-express');
const port = 3000;

const app = express();

app.engine('mustache', mustache());
app.set('views', './views');
app.set('view engine', 'mustache');

app.get('/login', function(req, res){
 res.render('login');
});

app.listen(port, function(req, res){
 console.log('Starting express-session login app...');
});
