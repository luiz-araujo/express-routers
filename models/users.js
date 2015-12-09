'use strict';

let mongoose = require('mongoose');
let Schema = require('mongoose').Schema;

let schema = new Schema({
	firstname: {type: String, required: true},
	email: {type: String, required: true, unique: true},
	created: {type: Date, set: Date.now}
});

module.exports = mongoose.model('users', schema);