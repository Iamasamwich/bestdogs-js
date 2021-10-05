const getDogs = require('./dogsControllers/getDogs');
const addDog = require('./dogsControllers/addDog');
const removeDog = require('./dogsControllers/removeDog');

const controllers = {
  getDogs,
  addDog,
  removeDog
};

module.exports = controllers;
