var express = require('express');
var app = express();
var exphbs  = require('express-handlebars');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');

//Set Templating Engine Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Serve Static Content
app.use('/public', express.static(__dirname + "/public"));
app.use('/public', express.static('public'));
app.use('/bower_components', express.static(__dirname + "/bower_components"));
app.use(express.static(__dirname + "/bower_components"));

//This is the BodyParser middleware
 app.use(bodyParser.urlencoded({ extended: false }));

//Setup Server And Set Port
var PORT = Number(process.env.PORT || 8000);
app.listen(PORT, function() {
  console.log("Listening on PORT %s", PORT);
});

//Routes
 app.get('/', function(req, res){
   res.render('home', {
        title : 'TAG Cyber Security',
        layout : 'main'
     });
 });
