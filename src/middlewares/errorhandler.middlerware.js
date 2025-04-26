const errorHandler = (err, req, res, next) => {
  console.error(`[${new Date().toISOString()}]`, err);
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    // stack: err.stack,
  });
};

module.exports = errorHandler;
