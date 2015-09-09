'use strict';

var net = require('net');
var fs = require('fs');
var time = require('time');

var now = new time.Date()

var server = net.createServer(function(socket) {
  socket.on('data', function(data) {
  	console.log(data.toString());
  	var writeStream = fs.createWriteStream('./' + now.toString());
  	writeStream.write(data.toString());
  });

  socket.on('end', function() {
  	console.log('disconnected');
  });
});

server.listen(3000);
