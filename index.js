require("dotenv").config();
const express = require("express");
const { router } = require("./src/routes");
const { connect } = require("./src/db");
const bodyParser = require("body-parser");
const errorHandler = require("./src/middlewares/errorhandler.middlerware");

const port = process.env.PORT || 8080;

(async () => {
  const app = express();

  await connect();

  app.use(bodyParser.json({ limit: "100mb" }));

  app.use("/api", router);

  app.use(errorHandler);

  app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
  });
})();
