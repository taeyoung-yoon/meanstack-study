
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
<<<<<<< HEAD
var app = express();

require('./app_server/models/db');
=======

var app = express();
>>>>>>> 1d1a460a81054ee200bf4ad0ae26671966073b79

console.log('__dirname: ', __dirname);
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '/app_server/views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

<<<<<<< HEAD
//console.log('NODE_ENV', process.env.NODE_ENV);
//console.log('app.get(env)', app.get('env'));

=======
>>>>>>> 1d1a460a81054ee200bf4ad0ae26671966073b79
// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// require a routing file
require('./routes')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
