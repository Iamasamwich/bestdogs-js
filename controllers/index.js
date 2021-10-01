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
      return res.status(resp.status).json({
        status: resp.status,
        message: resp.message
      })
    })
    .catch(err => {
      if (err.status && err.message) {
        return res.status(err.status).json({
          status: err.status,
          message: err.message
        })
      } else {
        console.log(err);
        return res.status(500);
      }
    })
  },
  removeDog (req, res) {
    removeDog(req)
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