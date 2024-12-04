function logErrors(err, req, res, next){
  next(err);
}

function errorsHandler(err, req, res, next) {
  if (!res.headersSent) {
    res.status(500).json({
      message: err.message,
      stack: err.stack,
    });
  } else {
    next(err);
  }
}


function boomErrorHandler(err,req,res,next){
  if(err.isBoom){
    const { output } =err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}


module.exports = { logErrors, errorsHandler, boomErrorHandler }
