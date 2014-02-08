var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/', function(request, response) {
    response.render('index');
});

var port = 5000;

app.listen(port, function() {
    console.log('Server listening: http://localhost:' + port);
});