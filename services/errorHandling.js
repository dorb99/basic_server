// const debug = require("debug")("server");

exports.errorMiddleware = (err, req, res, next) => {
  console.log(`error: ${err.message}`);
  res.status(err.status || 500).json(`Error occurred: ${err.message}`);
};

exports.wrongTurn = (req, res) => {
  res.status(404).json("Wrong place");
};

exports.serverErrors = (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }
  switch (error.code) {
    // Permission denied. Happens when the server tries to bind to a port
    // without proper privileges (for example, port < 1024).
    case "EACCES":
      console.error(`${process.env.PORT} requires elevated privileges`);
      process.exit(1);
      break;
    //Address in use. Happens when the port is already being used by another process.
    case "EADDRINUSE":
      console.error(`${process.env.PORT} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};
