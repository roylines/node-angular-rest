var assert = require('assert'),
		angularResource = require('../lib/angular-resource'),
		sinon = require('sinon'),
		testObject = require('./testObject');

describe('angular-resource', function() {
	var app;
	beforeEach(function() {
		app = {
			"get": sinon.stub(),
			"post": sinon.stub(),
			"delete": sinon.stub()
		};
	});
	describe('without middleware', function() {
		describe('using testObject', function() {
			beforeEach(function() {
				angularResource(app, '/api', 'testObject');
			});
			it('should bind get', function() {
				assert(app.get.calledWith('/api/testObject/:id', testObject.get));
			});
			it('should bind save', function() {
				assert(app.post.calledWith('/api/testObject/:id', testObject.save));
			});
			it('should bind query', function() {
				assert(app.get.calledWith('/api/testObject', testObject.query));
			});
			it('should bind remove', function() {
				assert(app["delete"].calledWith('/api/testObject/:id', testObject.remove));
			});
		});
	});
	describe('with middleware', function() {
		var middleware = { };
		describe('using testObject', function() {
			beforeEach(function() {
				angularResource(app, '/api', 'testObject', middleware);
			});
			it('should bind get', function() {
				assert(app.get.calledWith('/api/testObject/:id', middleware, testObject.get));
			});
			it('should bind save', function() {
				assert(app.post.calledWith('/api/testObject/:id', middleware, testObject.save));
			});
			it('should bind query', function() {
				assert(app.get.calledWith('/api/testObject', middleware, testObject.query));
			});
			it('should bind remove', function() {
				assert(app["delete"].calledWith('/api/testObject/:id', middleware, testObject.remove));
			});
		});
	});
});