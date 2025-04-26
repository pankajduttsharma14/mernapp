const { Router } = require("express");
const authRouter = require("./auth.routes");

const router = Router({ mergeParams: true });

router.use("/auth", authRouter);

module.exports = { router };
