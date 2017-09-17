const express = require('express');
const app = express();
const PORT = process.env.PORT || 2080;

app.use(express.static('public'));

app.listen(PORT, function(){
	console.log('express listening on port ' + PORT);
});
