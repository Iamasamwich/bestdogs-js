const db = require('./index');

const validate = (req) => {
  // takes the req, checks if there is a body.dog of type string
  // valid -> returns the dog
  // invalid -> throws 406
  return new Promise((resolve, reject) => {
    if (
      !req.body ||
      !req.body.dog ||
      typeof(req.body.dog) !== 'string'
    ) {
      reject({status: 406, message: 'invalid'});
    } else {
      resolve(req.body.dog);
    };
  });
};

const checkIfAlreadyInDB = async (dog) => {
  //takes the dog, checks if already in DB
  //no -> returns the dog
  //yes -> throws 409
  const list = await db.getData('/dogsList');
  if (list.indexOf(dog) === -1) {
    return dog;
  } else {
    throw({status: 409, message: 'already there'});
  };
};

const addDogToDB = async (dog) => {
  //takes a dog and adds it to the db
  await db.push('./dogsList[]', dog);
  return;
};

const getDogsFromDB = async () => {
  //gets a list of dogs from the db
  const list = await db.getData('/dogsList');
  return list;
};

module.exports = {
  validate,
  checkIfAlreadyInDB,
  addDogToDB,
  getDogsFromDB
}