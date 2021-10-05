const db = require('./index');

const validate = (req) => {
  // takes the req, checks if there is a body.dog of type string
  // valid -> returns
  // invalid -> throws 406
  return new Promise((resolve, reject) => {
    if (
      !req.body ||
      !req.body.dog ||
      typeof(req.body.dog) !== 'string'
    ) {
      reject({status: 406, message: 'invalid'});
    } else {
      resolve();
    };
  });
};

const checkIfAlreadyInDB = (list, dog) => {
  //takes the dog
  //if the dog is in the list it returns ({inDB: true, dog, list})
  //if the dog is not in the list it returns ({inDB: false, dog, list})
  return new Promise((resolve) => {
    if (list.indexOf(dog) === -1) {
      resolve ({inDB: false, list, dog});
    } else {
      resolve ({inDB: true, list, dog});
    };
  });
};

const addDogToDB = async (dog) => {
  //takes a dog and adds it to the db
  await db.push('/dogsList[]', dog);
  return;
};

const getDogsFromDB = async () => {
  //gets a list of dogs from the db
  const list = await db.getData('/dogsList');
  return list;
};

const removeDogFromDB = async ({list, dog}) => {
  const newList = list.filter(DBdog => {
    return DBdog !== dog;
  });
  db.push('/dogsList', newList);
  return;
};


module.exports = {
  validate,
  checkIfAlreadyInDB,
  addDogToDB,
  getDogsFromDB,
  removeDogFromDB
}