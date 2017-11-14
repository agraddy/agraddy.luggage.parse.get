var mod = function(req, res, lug, cb) {
	var gets = [];
	var i;
	var parts = req.url.split('?');
	var pieces;
	lug.slugs = parts[0].slice(1).split('/');

	lug.get = {};
	if(parts.length > 1) {
		gets = parts[1].split('&');
		for(i = 0; i < gets.length; i++) {
			pieces = gets[i].split('=');
			lug.get[pieces[0]] = pieces[1];
		}
	}

	cb();
}

module.exports = mod;
