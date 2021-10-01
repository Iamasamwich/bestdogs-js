const addDog = require('../db/addDog');
const removeDog = require('../db/removeDog');

module.exports = {
  addDog (req, res) {
    addDog(req)
    .then(resp => {
      console.log(resp);
      return resp
    })
    .then(resp => {
      res.status(resp.status).json({
        status: resp.status,
        message: resp.message
      })
    })
    .catch(err => {
      res.status(err.status).json({
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
      res.status(resp.status).json({
        message: 'removing',
        dogId: req.params.url,
        list: resp.list
      });
    })
    .catch(err => {
      res.status(err.status).json({
        status: err.status,
        message: err.message
      });
    });
  }
};