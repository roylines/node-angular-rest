# node-angular-resource [![Build Status](https://travis-ci.org/roylines/node-angular-resource.png?branch=master)](https://travis-ci.org/roylines/node-angular-resource)
[AngularJS](http://angularjs.org/) [$resource](http://docs.angularjs.org/api/ngResource.$resource) bindings for express in node

## Description
angular-resource is a node module that simplifies the use of [angularjs](http://angularjs.org/)
[$resource](http://docs.angularjs.org/api/ngResource.$resource) factory by creating the default
set of resource actions for get, save, query, remove and delete.

It is best described by example. Suppose you have an angularjs service defined as follows:

```javascript
var myServices = angular.module('myServices', ['ngResource'])

myServices.factory('Task', function($resource) {
	return $resource('api/tasks/:id', { id: "@_id" });
});
```

The myServices Task will, by default, now support get, save, query, remove and delete. The
required endpoints can simply be routed via express by using the angular-resource module:

First create a task.js with the following details:
```javascript
var task = { };

task.get = function(req, res) {
	res.json({});
};

task.save = function(req, res) {
	res.send(200);
};

task.query = function(req, res) {
	res.json([]);
};

task.remove = function(req, res) {
	res.send(200);
};

module.exports = task;
```

and then use angular-resource to bind it into express.

```javascript
var angularResource = require('angular-resource'),
		express = require('express');

var app = express();

angularResource(app, '/api/1', 'task');

app.listen(3000);
```

This will bind the required endpoints through to task.js. Note that both 'delete' and 'remove' are
routed to the 'remove' method.

If you wish to use middleware, then define the binding as follows:

```javascript
var middleware = function(req, res, next) {
	return next(req, res);
};

angularResource(app, '/api/1', 'task', middleware);
```


If you don't want to support all of the default $resource actions, then just omit them
from the object. In the example above,  if you don't want to support remove then just define task.js as follows:

```javascript
var task = { };

task.get = function(req, res) {
	res.json({});
};

task.save = function(req, res) {
	res.send(200);
};

task.query = function(req, res) {
	res.json([]);
};

module.exports = task;
```

You can now create includes for all of the $resource objects your angularjs services require and
bind them in the same way.
