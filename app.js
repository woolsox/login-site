const data = require('./users.js')
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

app.use(session({
 secret: 'gatorade',
 resave: false,
 saveUninitalized: true
}));

app.get('/login', function(req, res){
 res.render('login');
});


app.post('/login', function(req, res){
 let username = req.body.username;
 let password = req.body.password;

for (let i = 0; i < data.users.length; i++) {
   if (username === data.users[i].username && password === data.users[i].password) {
     console.log('hell yeah');
     req.session.authenticated = true;
     app.get('/userpage', function(req, res){
       res.render('userpage', {username: username});
     });
     res.redirect('/userpage')
  } else if (username !== data.users[i].username || password !== data.users[i].password) {
     res.redirect('/login');
  }
}
});

app.listen(port, function(req, res){
 console.log('Starting express-session login app...');
});


// amys answers

// this goes in post:
//  authenticate(req, username, password);
//  if (req.session && req.session.authenticated){
//   res.render('login', {username: password})
// } else {
//   res.redirect('/');
// }


//this is the auth function
// function authenticate(req, username, password){
//   var authenticatedUser = data.users.find(function (user){
//     if (username === user.username && password === user.password) {
//       req.session.authenticated = true;
//       console.log('User & Password Authenticated');
//     } else {
//       return false;
//     }
//   })
// }
