const db = require('../');

const removeDogFromDB = async (dog) => {

  const index = await db.getIndex('/dogsList', dog);
  await db.delete(`/dogsList[${index}]`);
  return;
};

module.exports = removeDogFromDB;