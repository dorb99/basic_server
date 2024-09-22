const debug = require('debug')("logs");

exports.hello = (req, res, next) => {
  try {
    debug("hello is called")
    const { name } = req.body;
    if (!name) {
      throw new Error("Name parameter is missing.");
    }
    res.status(200).json(`Hey ${name}, I'm Moshe`);
  } catch (error) {
    next(error);
  }
};

exports.bye = (req, res, next) => {
  try {
    debug("bye is called")
    const { name } = req.body;
    if (!name) {
      throw new Error("Name parameter is missing.");
    }
    res.status(200).json(`Bye ${name}, was nice seeing you`);
  } catch (error) {
    next(error);
  }
};

exports.run = (req, res) => {
  try {
    res.status(200).json(`Oh shit, I need to run!!`);
  } catch (error) {
    next(error);
  }
};
