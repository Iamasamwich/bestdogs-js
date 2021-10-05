const db = require('./');
const validate = require('./functions/validate');
const checkIfAlreadyInDB = require('./functions/checkIfAlreadyInDB');
const addDogToDB = require('./functions/addDogToDB');
const getDogsFromDB = require('./functions/getDogsFromDB');

const addDog = (req) => {
  return validate(req)
    .then(() => checkIfAlreadyInDB(req.body.dog))
    .then(resp => {
      if (resp === true) {
        throw ({status: 409, message: 'dog already in list'});
      }
      return;
    })
    .then(() => addDogToDB(req.body.dog))
    .then(getDogsFromDB)
    .then(list => ({status: 201, message: 'dog added', list}))
    .catch(err => {
      throw err;
    });
};

module.exports = addDog;