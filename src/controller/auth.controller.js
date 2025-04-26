const User = require("../models/user-model");
const bcrypt = require("bcrypt");
const AuthService = require("../services/auth.service");

const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    let data = await AuthService.login(email, password);
    res.body = data;
    next();
  } catch (error) {
    next(error);
  }
};

const Signup = async (req, res, next) => {
  try {
    let data = await AuthService.signup(req.body);
    res.body = data;
    next();
  } catch (error) {
    next(error);
  }
};

const UpdateUser = async (req, res, next) => {
  try {
    let { id } = req.params;
    console.log(id);
    let data = await AuthService.update(id, req.body);
    res.body = data;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { Login, Signup, UpdateUser };
