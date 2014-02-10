var angularResource = require('angular-resource'),
  express = require('express');

var app = express();

var middleware = function(req, res, next) {
  return next(req, res);
};

// without middleware
angularResource(app, '/api/1', 'task');

// with middleware
angularResource(app, '/api/2', 'task', middleware);

app.listen(3000);
