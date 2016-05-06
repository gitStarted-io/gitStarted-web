var express = require('express');

module.exports = function(app) {

	app.get('/', require('./routes/root.js'));

};

