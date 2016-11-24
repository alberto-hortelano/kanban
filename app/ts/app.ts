/**
 * Codility awards manager
 * API
 * CRUD codilitys
 *
 * @type {Object}
 */
var BaseController = require('./controllers/base.controller');

var express = require('express')();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/base');

var appp = {
	/**
	 * Create new codility
	 * @return {[type]} [description]
	 */
	create: function() {

	},
	/**
	 * Read codilitys
	 * @return {[type]} [description]
	 */
	read: function() {

	},
	/**
	 * Update existing codility
	 * @return {[type]} [description]
	 */
	update: function() {

	},
	/**
	 * Delete existing codility
	 * @return {[type]} [description]
	 */
	delete: function() {

	}
};


module.exports = express;
