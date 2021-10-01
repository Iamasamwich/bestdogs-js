const dogs = require('../controllers');


module.exports = (app) => {

  app.get('/adddog/:url', dogs.addDog);
  app.get('/removedog/:url', dogs.removeDog);

  app.get('*', (req, res) => {
    res.status(404).send();
  });
};

