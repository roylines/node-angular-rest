var path = require('path');

module.exports = function(app, root, name, middleware) {
	var r = require(path.join(path.dirname(module.parent.filename), name));
	var uri = root + '/' + name;
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
		app['delete'](iduri, r.remove);
	}
};