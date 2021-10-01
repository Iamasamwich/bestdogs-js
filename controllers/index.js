module.exports = {
  addDog (req, res) {
    res.status(201).json({
      message: 'adding',
      dogId: req.params.url
    });
  },
  removeDog (req, res) {
    res.status(200).json({
      message: 'removing',
      dogId: req.params.url
    });
  }
};