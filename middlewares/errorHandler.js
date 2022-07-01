const { ValidationError } = require('sequelize')

function logErrors (err,req,res,next) {

  next(err);
}

function validationErrorHandler (err,req,res,next) {
  if (err instanceof ValidationError) {
    res.status(409).json({
      message: err.message,
      stack: err.errors
    });
  }
  next(err);
}


function errorsHandler (err,req,res,next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

function boomErrorHandler (err,req,res,next) {
  if (err.isBoom) {
      const { output } = err;
      res.status(output.statusCode).json(output.payload);
  }
  next(err);
}


module.exports = { logErrors, errorsHandler, boomErrorHandler, validationErrorHandler }
