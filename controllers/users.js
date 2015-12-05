'use strict'

module.exports = {
	list:  list,
	create: create,
	get: get,
	update: update,
	delete: del
};


function list(req, res){
	var users = [
		{name: 'Darlan'},
		{name: 'Clara'}
	];
	res.json(users);
}

function create(req, res){
	res
		.status(201)
		.json({
			message: 'created'
		})
}

function get(req, res){
//	console.log(req.params);
	var user = {name: 'Darlan'};
	res.json(user);
}

function update(req, res){
//	console.log(req.body);
	res.json({
		message: 'updated'
	});
}

function del(req, res){
	res.json({
		message: 'deleted'
	});
}
