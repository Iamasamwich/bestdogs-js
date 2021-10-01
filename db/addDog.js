const db = require('./');

module.exports = (req) => {
  async function checkIfThere (url) {
    const list = await db.getData('/dogsList');
    if (list.indexOf(url) === -1) {
      return url;
    } else {
      throw({status: 409, message: 'already there'})
    };
  };

  async function addDog(url) {
    db.push('/dogsList[]', url);
    return;
  };

  return checkIfThere(req.params.url)
  .then(url => addDog(url))
  .then(() => ({status: 201, message: 'dog added'}))
  .catch(err => {
    throw err;
  });
};