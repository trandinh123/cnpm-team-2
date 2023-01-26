module.exports = function asyncWrapper(fn) {
  return async function wrappedFn(req, res, next) {
    try {
      await fn(req, res);
    } catch (err) {
      console.log(err.message);
      next(err);
    }
  };
};
