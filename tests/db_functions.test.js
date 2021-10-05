const getDogs = require('../db/getDogs');
const addDog = require('../db/addDog');
const removeDog = require('../db/removeDog');


let req = {
  body: {
    dog: ''
  }
};

describe('dog functions', () => {
  test('addDog: lets you add a dog', () => {
    req.body.dog = 'test 1';
    return addDog(req)
    .then(resp => {
      expect(resp.status).toBe(201);
      expect(resp.message).toBe('dog added');
    });
  });

  test('addDog: it wont let you add the same dog twice', () => {
    return addDog(req)
    .catch(resp => {
      expect(resp.status).toBe(409);
      expect(resp.message).toBe('dog already in list');
    });
  });

  test('addDog: it lets you add another dog', () => {
    req.body.dog = 'test 2';
    return addDog(req)
    .then(resp => {
      expect(resp.status).toBe(201);
      expect(resp.message).toBe('dog added');
    });
  });

  test('addDog: it returns the list of dogs', () => {
    req.body.dog = 'test 3';
    return addDog(req)
    .then(resp => {
      expect(resp.status).toBe(201);
      expect(resp.message).toBe('dog added');
      expect(resp.list).toBeTruthy();
      expect(resp.list.indexOf('test 1')).not.toBe(-1);
      expect(resp.list.indexOf('test 2')).not.toBe(-1);
      expect(resp.list.indexOf('test 3')).not.toBe(-1);
    });
  });

  test('getDogs: it returns a list of dogs', () => {
    return getDogs()
    .then(resp => {
      expect(resp.status).toBe(200);
      expect(resp.message).toBe('dogs fetched');
      expect(resp.list.length).toBeGreaterThanOrEqual(2)
      expect(resp.list.indexOf('test 1')).not.toBe(-1);
      expect(resp.list.indexOf('test 2')).not.toBe(-1);
      expect(resp.list.indexOf('test 3')).not.toBe(-1);
    });
  });

  test('removeDog: it removes a dog', () => {
    req.body.dog = 'test 1';
    return removeDog(req)
    .then(resp => {
      expect(resp.status).toBe(200);
      expect(resp.message).toBe('dog removed');
    });
  });

  test('removeDog: it wont remove a dog which isnt there', () => {
    return removeDog(req)
    .catch(resp => {
      expect(resp.status).toBe(404);
      expect(resp.message).toBe('dog not in list');
    });
  });

  test('removeDog: it returns a list of dogs', () => {
    req.body.dog = 'test 2';
    return removeDog(req)
    .then(resp => {
      expect(resp.list).toBeTruthy();
      expect(resp.list.indexOf('test 2')).toBe(-1);
      expect(resp.list.indexOf('test 3')).toBe(resp.list.length - 1);
    });
  });

  test('cleaning up test cases', () => {
    removeDog({body: {dog: 'test 3'}})
    .then(resp => {
      expect(resp.list.indexOf('test 1')).toBe(-1);
      expect(resp.list.indexOf('test 2')).toBe(-1);
      expect(resp.list.indexOf('test 3')).toBe(-1);
    });
  });
});