const dogs = require('../controllers');


module.exports = (app) => {

  app.get('/getdogs', dogs.getDogs);
  app.post('/adddog', dogs.addDog);
  app.put('/removedog', dogs.removeDog);

  app.get('*', (req, res) => {
    res.status(404).send();
  });
};

