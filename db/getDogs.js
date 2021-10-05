const db = require('./');

const getDogs = (req) => {
  async function getDogs() {
    const list = await db.getData('/dogsList');
    return list;
  };

  return getDogs()
  .then(res => ({status: 200, message: 'dogs fetched... irony', list: res}))
  .catch(err => {
    throw err;
  });
};

module.exports = getDogs;

