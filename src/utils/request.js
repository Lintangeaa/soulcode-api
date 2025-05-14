const requestHandler = (fn) => {
  return async (req, res, next) => {
    try {
      const result = await fn(req, res, next);

      if (result.status) {
        res.status(200).json({
          success: true,
          message: result.message || 'Success',
          result: result.data || result,
        });
      } else {
        res.status(result.status || 500).json({
          success: false,
          message: result.message || 'Internal Server Error',
        });
      }
    } catch (err) {
      console.error(err);
      res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error',
      });
    }
  };
};

module.exports = requestHandler;
