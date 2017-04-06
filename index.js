const express =  require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

//middleware required for bodyParser
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended: false}));
//Set static path
app.use(express.static(path.join(__dirname, 'public')));

// Sending JSON files
app.get('/users', (req, res) => {
	let users = [
		{
			name: 'Harish',
			designation: 'Explorer'
		},
		{
			name: 'Ganesh',
			designation: 'ShopKeeper'
		}
	]
	res.json(users);
});

// Sending Files
app.get('/download', (req, res) => {
	res.download(path.join(__dirname, '/downloads/pdf.pdf'));
});

//Redirecting
app.get('/about', (req, res) => {
	res.redirect('/about.html');
});
//post
app.post('/subscribe', (req, res) => {
	let name = req.body.name;
	let email = req.body.email;
	res.send(name + 'has subscribed with' + email);
});

app.listen(3000, () => console.log('done'));
