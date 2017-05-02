let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let path = require('path');

let publicPath = path.join(__dirname, '../public');
let port = process.env.PORT || 3000;

app.use(express.static(publicPath));
app.use(bodyParser.json());

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});