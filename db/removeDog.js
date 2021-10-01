const db = require('./');

module.exports = (req) => {

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


  return getList(req.params.url)
  .then(resp => checkIfInList(resp))
  .then(newList => updateDB(newList))
  .then(newList => ({status: 201, message: 'dog removed', list: newList}))
  .catch(err => {
    throw(err)
  })
};