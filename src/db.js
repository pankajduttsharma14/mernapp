const mongoose = require("mongoose");
const uri = `mongodb://127.0.0.1:27017/mern-app`;

let connection;

module.exports = {
  connection,
  connect: async function () {
    try {
      connection = await mongoose.connect(uri);
      console.log("database connected");
    } catch (error) {
      throw Error(error);
    }
  },
  disconnect: async function () {
    await connection.close();
  },
};
