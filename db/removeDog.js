const validate = require('./functions/validate');
const getDogsFromDB = require('./functions/getDogsFromDB');
const checkIfAlreadyInDB = require('./functions/checkIfAlreadyInDB');
const removeDogFromDB = require('./functions/removeDogFromDB');

const removeDog = (req) => {
  return validate(req)
  .then(() => checkIfAlreadyInDB(req.body.dog))
  .then(resp => {
    if (resp === false) throw ({status: 404, message: 'dog not in list'});
    return;
  })
  .then(() => removeDogFromDB(req.body.dog))
  .then(getDogsFromDB)
  .then(list => ({status: 200, message: 'dog removed', list}))
  .catch(err => {
    throw(err)
  })
};

module.exports = removeDog;