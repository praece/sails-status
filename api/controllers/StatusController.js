/**
 * Status Controller
 *
 * @description :: api endpoint for checking app status
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
module.exports = {
  _config: {
    rest: false
  },
  
  checkStatus: function(req, res) {
    return res.ok();
  }
};
