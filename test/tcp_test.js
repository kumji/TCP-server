'use strict';

var chai = require('chai'), 
	expect = chai.expect;
var net = require('net');

var server = require(__dirname + '/../tcp-server');

describe('tcp basic', function() {
	it('should be able to get data', function(done) {
		server.listen(3000);

		var json = '{"note": "hello world"}';

		var client = net.connect(3000, function(){
			client.write(json);
		});

		client.on('data', function(data){
			serverRes = JSON.parse(data.toString());
			expect(serverRes).to.eql('{"note": "hello world"}');
		});
		done();
	});
});