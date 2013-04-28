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