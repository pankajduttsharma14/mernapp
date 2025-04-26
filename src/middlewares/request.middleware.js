const requestMiddleware = (schema) => {
  return function (req, res, next) {
    try {
      let validate = schema(req.body);
      if (!validate) return res.status(401).json({ msg: "Not allowed" });
      else next();
    } catch (error) {
      next(error);
    }
  };
};

module.exports = { requestMiddleware };
