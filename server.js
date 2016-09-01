var express     = require('express'),
    app         = express();

// Css
app.use('/css', express.static(__dirname + '/client/app/css'));

// JS
app.use('/js', express.static(__dirname + '/client/app/js'));
app.use('/controllers', express.static(__dirname + '/client/app/controllers/'));
app.use('/angular', express.static(__dirname + '/node_modules/angular/'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

// Angular Utils Pagination
app.use('/angular-pagination', express.static(__dirname + '/bower_components/angularUtils-pagination/'));

// Root Index
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/index.html');
});

// Server 
app.listen(3000, function() {
  console.log('Listening on 3000');
});
