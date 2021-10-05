const db = require('../db');

const checkIfAlreadyInDB = (dog) => {
  //takes the dog
  //returns true of false depending on whether it's in the db
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