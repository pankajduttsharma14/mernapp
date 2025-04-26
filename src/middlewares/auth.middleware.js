const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    let token = req?.headers?.authorization?.split(" ")[1];
    if (!token)
      res
        .status(401)
        .json({ error: "Unauthorized request: No token provided" });
    let verified = jwt.verify(token, process.env.JWT_KEY);
    if (verified) next();
  } catch (error) {
    next(error);
  }
};

module.exports = { authMiddleware };
