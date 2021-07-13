const errorHandler = (req, res, next) => {
  res.status(500);
  res.json({
    msg: 'Internal Server Error',
  });
};

module.exports = errorHandler;
