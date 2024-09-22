// const debug = require("debug")("server");

exports.errorMiddleware = (err, req, res, next) => {
  console.log(`error: ${err.message}`);
  res.status(err.status || 500).json(`Error occurred: ${err.message}`);
};

exports.wrongTurn = (req, res) => {
  res.status(404).json("Wrong place");
};
