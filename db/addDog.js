const db = require('./');

module.exports = (req) => {
  async function addDog(url) {
    db.push('/dogsList[]', url);
    return;
  };

  return addDog(req.params.url)
  .then(() => ({status: 200, message: 'dog added'}))
  .catch(err => ({status: 400, message: 'error'}));
};