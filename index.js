const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000


var app = express();


app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', function(req, res) {
	res.render('pages/home');
});
app.get('/home', (req, res) => res.render('pages/home'))

app.get('/login', function(req, res) {
	res.render('pages/login');
});

app.get('/register', function(req, res) {
	res.render('pages/register');
});

app.get('/activate', function(req, res) {
	res.render('pages/activate');
});

//kyc
app.get('/kyc', function(req, res) {
	res.render('pages/kyc');
});

//fileit
app.get('/fileit', function(req, res) {
	res.render('pages/fileit');
});

//suite
app.get('/suite', function(req, res) {
	res.render('pages/suite');
});

//notes
app.get('/notes', function(req, res) {
	res.render('pages/notes');
});

//forms
app.get('/forms', function(req, res) {
	res.render('pages/activate');
});

//keepass
app.get('/vault', function(req, res) {
	res.render('pages/vault');
});

//FAQ
app.get('/faq', function(req, res) {
	res.render('pages/faq');
});

//Terms of Use
app.get('/tou', function(req, res) {
	res.render('pages/tou');
});

//Privacy Policy
app.get('/privacy', function(req, res) {
	res.render('pages/privacy');
});

//Cookie Policy
app.get('/cookie', function(req, res) {
	res.render('pages/cookie');
});



app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
  
  

