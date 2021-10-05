const db = require('./');
const {validate, checkIfAlreadyInDB, addDogToDB, getDogs} = require('./db_functions');

const addDog = (req) => {
  return validate(req)
    .then(checkIfAlreadyInDB)
    .then(addDogToDB)
    .then(getDogs)
    .then(list => ({status: 201, message: 'dog added', list}))
    .catch(err => {
      throw err;
    });
};

module.exports = addDog;