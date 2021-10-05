const db = require('./');
const getDogs = require('./getDogs');

const addDog = (req) => {

  async function validate (req) {
    if (
      !req.body ||
      !req.body.dog ||
      typeof(req.body.dog) !== 'string'
    ) throw ({status: 406, message: 'invalid'})
    return req.body.dog;
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
  .then(checkIfThere)
  .then(addDog)
  .then(getDogs)
  .then(resp => ({status: 201, message: 'dog added', list: resp.list}))
  .catch(err => {
    throw err;
  });
};

module.exports = addDog;