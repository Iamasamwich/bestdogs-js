const db = require('./');
const {validate, checkIfAlreadyInDB, addDogToDB, getDogsFromDB} = require('./db_functions');

const addDog = (req) => {
  return validate(req)
    .then(getDogsFromDB)
    .then(list => checkIfAlreadyInDB(list, req.body.dog))
    .then(resp => {
      if (resp.inDB === true) {
        throw ({status: 409, message: 'dog already in list'});
      }
      return (resp.dog);
    })
    .then(addDogToDB)
    .then(getDogsFromDB)
    .then(list => ({status: 201, message: 'dog added', list}))
    .catch(err => {
      throw err;
    });
};

module.exports = addDog;