const {getDogsFromDB} = require('./db_functions');

const getDogs = () => {
  return getDogsFromDB()
    .then(list => ({status: 200, message: 'dogs fetched', list}))
    .catch(err => {
      throw err;
    });
};

module.exports = getDogs;

