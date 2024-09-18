exports.auth = (req, res, next) => {
  console.log("entered");
  if (req.url === "/no*") {
    res.send("No entry premitted");
  } else {
    next();
  }
};

exports.errorMiddleware = (err, req, res, next) => {
    console.log(`error- ${err.message}`);
    res.status(err.status || 500).json({
      message: "An unexpected error occurred",
      error: err.message,
    });
  };