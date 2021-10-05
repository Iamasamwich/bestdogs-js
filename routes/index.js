const dogsController = require('../controllers').dogsController;

const router = (app) => {

  app.get('/getdogs', dogsController.getDogs);
  app.post('/adddog', dogsController.addDog);
  app.put('/removedog', dogsController.removeDog);

  app.get('*', (req, res) => {
    res.status(404).send();
  });
};

module.exports = router;