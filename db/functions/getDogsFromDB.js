const db = require('../');

const getDogsFromDB = async () => {
  //gets a list of dogs from the db
  return await db.getData('/dogsList');
  // return list;
};

module.exports = getDogsFromDB;