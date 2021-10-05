const db = require('./');
const {getDogsFromDB} = require('./db_functions');


const getDogs = () => {
  return getDogsFromDB()
    .then(list => ({status: 200, message: 'dogs fetched... irony', list}))
    .catch(err => {
      throw err;
    });
};

module.exports = getDogs;

