const db = require('../db');

const addDogToDB = async (dog) => {
  //takes a dog and adds it to the db
  await db.push('/dogsList[]', {id: dog});
  return;
};

module.exports = addDogToDB;
