const { error } = require("ajv/dist/vocabularies/applicator/dependencies");

const responseMiddleware = (schema) => {
  return function (req, res) {
    try {
      let validate = schema(res.body);
      if (!validate) {
        return next(error);
      }
      res.status(200).json({
        body: res.body,
        errors: [],
      });
    } catch (error) {
      next(error);
    }
  };
};

module.exports = { responseMiddleware };
