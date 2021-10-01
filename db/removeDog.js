const db = require('./');

module.exports = (req) => {

  async function validate (req) {
    if (
      !req.body ||
      !req.body.dog ||
      typeof(req.body.dog) !== 'string'
    ) throw ({status: 406, message: 'invalid'});
    return req;
  };

  async function getList (url) {
    const list = await db.getData('/dogsList');
    return ({list, url});
  };

  async function checkIfInList ({list, url}) {
    if (list.indexOf(url) === -1) {
      throw ({status: 404, message: 'dog not there'});
    } else {
      const newList = list.filter(dog => {
        return dog !== url;
      });
      return newList;
    };
  };

  async function updateDB (newList) {
    await db.push('/dogsList', newList);
    return newList;
  };


  return validate(req)
  .then(req => getList(req.body.dog))
  .then(resp => checkIfInList(resp))
  .then(newList => updateDB(newList))
  .then(newList => ({status: 201, message: 'dog removed', list: newList}))
  .catch(err => {
    throw(err)
  })
};