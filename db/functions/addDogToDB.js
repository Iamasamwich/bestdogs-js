const db = require('../');

const addDogToDB = async (dog) => {
  //takes a dog and adds it to the db
  await db.push('/dogsList[]', {id: dog});
  return;
};

module.exports = addDogToDB;
