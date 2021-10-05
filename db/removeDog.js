const db = require('./');
const {validate, getDogsFromDB, checkIfAlreadyInDB, removeDogFromDB} = require('./db_functions');

const removeDog = (req) => {
  return validate(req)
  .then(getDogsFromDB)
  .then(list => checkIfAlreadyInDB(list, req.body.dog))
  .then(resp => {
    if (resp.inDB === false) throw ({status: 404, message: 'dog not in list'});
    return ({list: resp.list, dog: resp.dog});
  })
  .then(removeDogFromDB)
  .then(getDogsFromDB)
  .then(list => ({status: 200, message: 'dog removed', list}))
  .catch(err => {
    throw(err)
  })
};

module.exports = removeDog;