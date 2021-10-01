const getDogs = require('../db/getDogs');
const addDog = require('../db/addDog');
const removeDog = require('../db/removeDog');

module.exports = {
  getDogs (req, res) {
    console.log('getting dogs');
    getDogs()
    .then(resp => {
      return res.status(resp.status).json({
        status: resp.status,
        message: resp.message,
        list: resp.list
      });
    })
    .catch(err => {
      return res.status(err.status).json({
        status: err.status,
        message: err.message
      });
    })
  },


  addDog (req, res) {
    addDog(req)
    .then(resp => {
      console.log(resp);
      return resp
    })
    .then(resp => {
      return res.status(resp.status).json({
        status: resp.status,
        message: resp.message
      })
    })
    .catch(err => {
      return res.status(err.status).json({
        status: err.status,
        message: err.message
      })
    })
  },
  removeDog (req, res) {
    removeDog(req)
    .then(resp => {
      console.log(resp);
      return resp;
    })
    .then(resp => {
      return res.status(resp.status).json({
        message: 'removing',
        dogId: req.params.url,
        list: resp.list
      });
    })
    .catch(err => {
      return res.status(err.status).json({
        status: err.status,
        message: err.message
      });
    });
  }
};