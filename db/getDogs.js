const getDogsFromDB = require('./functions/getDogsFromDB');

const getDogs = () => {
  return getDogsFromDB()
    .then(list => ({status: 200, message: 'dogs fetched', list}))
    .catch(err => {
      throw err
    });
};

module.exports = getDogs;

