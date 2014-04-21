var mongoose = require('mongoose');

var uri = 'mongodb://localhost/Loc8r';
// heroku setup
console.log('============ db.js ============');
console.log('NODE_ENV', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
  uri = process.env.MONGOLAB_URI;
}
mongoose.connect(uri);

mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to', uri);
});

mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected');
});

// Listening for SIGInT on Windows
// =================================
var readLine = require('readline');
if (process.platform == 'win32') {
  var rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.on('SIGINT', function(){
    process.emit('SIGINT');
  });
}

var gracefulShutdown = function(msg, callback) {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected through ' + msg);
    callback();
  });
};

// A Listen for SIGUSR2, which is what nodemon uses
process.once('SIGUSR2', function() {
  gracefulShutdown('nodemon restart', function() {
    console.log('Process PID', process.pid);
    process.kill(process.pid, 'SIGUSR2');
  });
});

// A Listen for SIGINT, emitted on application termination
process.on('SIGINT', function() {
  gracefulShutdown('app termination', function() {
    process.exit(0);
  });
});

// A Listen for SIGTERM, emitted when Heroku shuts the process down 
process.on('SIGTERM', function() {
  gracefulShutdown('Heroku app shutdonw', function() {
    process.exit(0);
  });
});

require('./locations');
