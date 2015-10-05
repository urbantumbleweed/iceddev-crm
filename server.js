'use strict';

var Hapi = require('hapi');
var OrientDB = require('orientjs');

// TODO: create a server/routes/ folder and index all routes
// var routes = require('./routes')

// TODO: create a server/handlers/ folder to store handler functions
// var handlers = require('./handlers')

var server = new Hapi.Server();
// move server configuration to separate file.
server.connection({ port: 3000 });

// TODO: move routes like this to a separate file.
server.route({
  method: 'GET',
  path: '/',
  // TODO: move handlers to handler file ind servers/handlers/ and index
  handler: function(request, reply){
    reply('Hello World');
  }
});

server.start(function(){
  console.log('Server running on: ', server.info.uri);
});
