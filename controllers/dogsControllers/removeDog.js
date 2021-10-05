const remove = require('../../db/removeDog');

const removeDog = (req, res) => {
  return remove(req)
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
};

module.exports = removeDog;