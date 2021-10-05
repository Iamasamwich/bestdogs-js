const controllers = require('../controllers');

const router = (app) => {

  app.get('/getdogs', controllers.getDogs);
  app.post('/adddog', controllers.addDog);
  app.put('/removedog', controllers.removeDog);

  app.get('*', (req, res) => {
    res.status(404).send();
  });
};

module.exports = router;