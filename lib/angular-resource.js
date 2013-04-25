var angularResource = function(app, name) {
	var r = require('./' + name);
	var uri = '/api/' + name;
	var iduri = uri + '/:id';

	if(r.get) {
		app.get(iduri, r.get);
	}
	if(r.save) {
		app.post(iduri, r.save);
	}
	if(r.query) {
		app.get(uri, r.query);
	}
	if(r.remove) {
		app.delete(iduri, r.remove);
	}
};

module.exports = angularResource;