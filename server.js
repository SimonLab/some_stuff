'use strict';

var Hapi = require('hapi');
var Home = require('./home.js');

exports.init = function (port, next) {
  var server = new Hapi.Server();

  server.connection({ port: port });

  server.register([Home], function (err) {
    if (err) {
      return next(err);
    }

    return server.start(function (errStart) {
      return next(errStart, server);
    });
  });
};
