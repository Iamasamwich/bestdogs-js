const validate = (req) => {
  // takes the req, checks if there is a body.dog of type string
  // valid -> returns
  // invalid -> throws 406
  return new Promise((resolve, reject) => {
    if (
      !req.body ||
      !req.body.dog ||
      typeof(req.body.dog) !== 'string'
    ) {
      reject({status: 406, message: 'invalid'});
    } else {
      resolve();
    };
  });
};

module.exports = validate;