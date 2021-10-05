const add = require('../../db/addDog');

const addDog = (req, res) => {
  return add(req)
    .then(resp => {
      return res.status(resp.status).json(resp);
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
      };
    });
};

module.exports = addDog;