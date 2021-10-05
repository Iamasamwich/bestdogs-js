const get = require('../../db/getDogs');

const getDogs = (req, res) => {
  return get()
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
    });
};

module.exports = getDogs;