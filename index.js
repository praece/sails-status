module.exports = function (sails) {
  var loader = require('sails-util-mvcsloader')(sails);

  // Load policies and config from default directories
  loader.configure({
    // policies: __dirname + '/api/policies',// Path to the policies to load
    config: __dirname + '/config' // Path to the config to load
  });

  return {
    defaults: {},
    initialize: function (next) {
      // Load controllers, models & services from default directories
      loader.adapt({
        controllers: __dirname + '/api/controllers' // Path to the controllers to load
        // models: __dirname + '/api/models', // Path to the models to load
        // services: __dirname + '/api/services' // Path to the services to load
      }, function (err) {
        return next(err);
      });
    }
  };
};