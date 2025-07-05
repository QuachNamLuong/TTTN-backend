// eslint-disable-next-line no-unused-vars
export const errorHandler = (err, req, res, next) => {
  console.error(err.stack || err.message);
  res.status(err.status || 500).json({
    error: 'Internal Server Error',
  });
};