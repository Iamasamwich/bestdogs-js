const db = require('../');

const checkIfAlreadyInDB = (dog) => {
  //takes the dog
  //if the dog is in the list it returns ({inDB: true, dog, list})
  //if the dog is not in the list it returns ({inDB: false, dog, list})
  return new Promise(async (resolve) => {
    const index = await db.getIndex('/dogsList', dog);
    if (index === -1) {
      resolve (false);
    } else {
      resolve (true);
    };
  });
};

module.exports = checkIfAlreadyInDB;