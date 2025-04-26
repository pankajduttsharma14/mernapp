const express = require("express");
const { Signup, Login, UpdateUser } = require("../controller/auth.controller");
const { requestMiddleware } = require("../middlewares/request.middleware");
const {
  loginSchema,
  signupSchema,
  updateUserSchema,
} = require("../schemas/auth.schema");
const { responseMiddleware } = require("../middlewares/response.middleware");
const { authMiddleware } = require("../middlewares/auth.middleware");

const authRouter = express.Router();

authRouter.post(
  "/signup",
  requestMiddleware(signupSchema.request),
  Signup,
  responseMiddleware(signupSchema.response)
);

authRouter.post(
  "/login",
  requestMiddleware(loginSchema.request),
  Login,
  responseMiddleware(loginSchema.response)
);

authRouter.put(
  "/update/:id",
  authMiddleware,
  requestMiddleware(updateUserSchema.request),
  UpdateUser,
  responseMiddleware(updateUserSchema.response)
);

module.exports = authRouter;
