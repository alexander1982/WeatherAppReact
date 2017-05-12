let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let path = require('path');

let publicPath = path.join(__dirname, '../public');
let imagesPath = path.join(__dirname, '../public/images');
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
	if(req.headers['x-forwarded-proto'] === 'https') {
		res.redirect('http://' + req.hostname + req.url);
	} else {
		next();
	}
	
});

app.use(express.static(publicPath));
app.use(express.static(imagesPath));
app.use(bodyParser.json());

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});