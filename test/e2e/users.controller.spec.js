'use strict'

var app = require('../../app.js');
var request = require('supertest');
var chai = require('chai');
chai.use(require('chai-things'))
var expect = chai.expect;

describe('Users controller', function(){

	describe('.list - GET /users', function(){
		it('should return a json array', function(done){
			request(app)
				.get('/api/users')
				.end(function (err, res){
					expect(res.statusCode).to.be.equal(200);
					expect(res.body).to.be.an('array');
					expect(res.body).all.have.property('name');
					done();
				})
		});
	});

	describe('.create - POST /users', function(){
		it('should return a json array', function(done){
			request(app)
				.post('/api/users')
				.end(function (err, res){
					expect(res.statusCode).to.be.equal(201);
					expect(res.body).to.be.an('object');
					expect(res.body.message === 'created');
					done();
				})
		});
	});

	describe('.get - GET /users/:id', function(){
		it('should return a json array', function(done){
			request(app)
				.get('/api/users/?user=1')
				.end(function (err, res){
					expect(res.statusCode).to.be.equal(200);
					expect(res.body).to.be.an('array');
					expect(res.body).all.have.property('name');
					done();
				})
		});
	});

	describe('.update - PUT /users/:id', function(){
		it('should return a json array', function(done){
			request(app)
				.put('/api/users/?user=1')
				.end(function(err, res){
					expect(res.statusCode).to.be.equal(200);
					expect(res.body).to.be.an('object');
					expect(res.body.message === 'updated');
					done();
			})
		})
	});

	describe('.delete - DELETE /users/:id', function(){
		it('should return a json array', function(done){
			request(app)
				.delete('/api/users/?user=1')
				.end(function(err, res){
					expect(res.statusCode).to.be.equal(200);
					expect(res.body).to.be.an('object');
					expect(res.body.message === 'deleted');
					done();
			})
		})
	});

});



