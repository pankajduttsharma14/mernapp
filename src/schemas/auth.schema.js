const ajv = require("../lib/ajv");

const loginSchema = {
  request: ajv.compile({
    type: "object",
    required: ["email", "password"],
    properties: {
      email: {
        type: "string",
        minLength: 5,
      },
      password: {
        type: "string",
        minLength: 3,
      },
    },
  }),
  response: ajv.compile({
    type: "object",
    properties: {
      token: {
        type: "string",
      },
      user: {
        type: "object",
      },
    },
  }),
};

const signupSchema = {
  request: ajv.compile({
    type: "object",
    required: ["username", "email", "phone", "password"],
    properties: {
      username: {
        type: "string",
        minLength: 5,
      },
      password: {
        type: "string",
        minLength: 4,
      },
      email: {
        type: "string",
        minLength: 5,
      },
      phone: {
        type: "string",
        minLength: 10,
        maxLength: 10,
      },
    },
  }),
  response: ajv.compile({
    type: "object",
    properties: {
      token: {
        type: "string",
      },
      user: {
        type: "object",
      },
    },
  }),
};

const updateUserSchema = {
  request: ajv.compile({
    type: "object",
    properties: {
      username: {
        type: "string",
        minLength: 5,
      },
      email: {
        type: "string",
        minLength: 5,
      },
      phone: {
        type: "string",
        minLength: 10,
        maxLength: 10,
      },
    },
  }),
  response: ajv.compile({
    type: "object",
    properties: {
      user: {
        type: "object",
      },
    },
  }),
};

module.exports = { loginSchema, signupSchema, updateUserSchema };
