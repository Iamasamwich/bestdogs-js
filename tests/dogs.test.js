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
      expect(resp.message).toBe('already there');
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

  test('getDogs: it returns a list of dogs', () => {
    return getDogs()
    .then(resp => {
      expect(resp.status).toBe(200);
      expect(resp.message).toBe('dogs fetched... irony');
      expect(resp.list.length).toBeGreaterThanOrEqual(2)
    })
  })

  test('removeDog: it removes a dog', () => {
    req.body.dog = 'test 1';
    return removeDog(req)
    .then(resp => {
      expect(resp.status).toBe(201);
      expect(resp.message).toBe('dog removed');
    });
  });

  test('removeDog: it wont remove a dog which isnt there', () => {
    return removeDog(req)
    .catch(resp => {
      expect(resp.status).toBe(404);
      expect(resp.message).toBe('dog not there');
    });
  });

  test('cleaning up test cases', () => {
    req.body.dog = 'test 2';
    removeDog(req);
  })
});