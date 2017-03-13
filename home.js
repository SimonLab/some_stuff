'use strict';

var fs = require('fs');
var path = require('path');
var marked = require('marked');

exports.register = function (server, options, next) {
  server.route([
    {
      method: 'GET',
      path: '/',
      config: {
        description: 'return the home page',
        handler: function (request, reply) {
          var filePath = path.join(__dirname, 'stuff/process.md');
          var markdown = fs.readFileSync(filePath);
          var html = marked(markdown.toString());

          return reply(html);
        }
      }
    }

  ]);

  return next();
};

exports.register.attributes = { name: 'Home' };
