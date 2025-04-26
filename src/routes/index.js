const { Router } = require("express");
const authRouter = require("./auth.routes");
const { authMiddleware } = require("../middlewares/auth.middleware");
const { privateRouter } = require("./private.routes");

const router = Router({ mergeParams: true });

router.use("/auth", authRouter);
router.use("/private", authMiddleware, privateRouter);

module.exports = { router };
