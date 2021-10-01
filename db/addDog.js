const db = require('./');

module.exports = (req) => {

  async function validate (req) {
    if (
      !req.body ||
      !req.body.dog ||
      typeof(req.body.dog) !== 'string'
    ) throw ({status: 406, message: 'invalid'})
    return req;
  };

  async function checkIfThere (url) {
    const list = await db.getData('/dogsList');
    if (list.indexOf(url) === -1) {
      return url;
    } else {
      throw({status: 409, message: 'already there'});
    };
  };

  async function addDog(url) {
    await db.push('/dogsList[]', url);
    return;
  };

  return validate(req)
  .then(req => checkIfThere(req.body.dog))
  .then(url => addDog(url))
  .then(() => ({status: 201, message: 'dog added'}))
  .catch(err => {
    throw err;
  });
};