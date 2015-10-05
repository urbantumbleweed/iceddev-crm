'use strict';

var _ = require('lodash');
var OrientDB = require('orientjs');

// Used to connect to the OrientDB server.
var serverConfig = require('./config').serverConfig;
var dbServer = OrientDB(serverConfig);

// default dbConfig settings
var dbConfig = require('./config').dbConfig;

function dbConnect(server, opts){
  var config = {
    dbName: opts.name || dbConfig.name,
    dbUser: opts.username || dbConfig.username,
    dbPassword: opts.password || dbConfig.password
  };
  return server.use(config);
}

module.exports = _.partial(dbConnect, dbServer);
