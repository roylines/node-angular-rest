var angularRest = require('angular-rest'),
  express = require('express');

var app = express();

var middleware = function(req, res, next) {
  return next(req, res);
};

// without middleware
angularRest(app, '/api/1', 'task');

// with middleware
angularRest(app, '/api/2', 'task', middleware);

app.listen(3000);
