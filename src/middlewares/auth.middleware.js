const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    console.log(req?.headers?.authorization);
    let token = req?.headers?.authorization.split(" ")[1];
    console.log(token);
    if (!token)
      res
        .status(401)
        .json({ error: "Unauthorized request: No token provided" });
    console.log(process.env.JWT_KEY);
    let verified = jwt.verify(token, process.env.JWT_KEY);
    if (verified) next();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { authMiddleware };
