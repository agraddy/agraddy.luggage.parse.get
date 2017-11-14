var path = require('path');
process.chdir(path.dirname(__filename));
var tap = require('agraddy.test.tap')(__filename);

var mod = require('../');

start();

function start() {
	var req = {};
	var res = {};
	var lug = {};
	req.url = '/one/two/three?four=4&five=5';


	mod(req, res, lug, function() {
		tap.assert.deepEqual(lug.get, {"four": "4", "five": "5"}, 'Should set get.');
		tap.assert.deepEqual(lug.slugs, ['one', 'two', 'three'], 'Should set slugs.');
	});
}

function end() {
}


