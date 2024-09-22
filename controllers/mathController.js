// const debug = require('debug')('math');

exports.add = (req, res, next) => {
  try {
    const { a, b } = req.params;
    const result = parseInt(a) + parseInt(b);
    if (isNaN(result)) {
      throw new Error("Invalid input: Please provide valid numbers.");
    }
    res.status(200).send(`Result: ${result}`);
  } catch (error) {
    next(error); 
  }
};

exports.remove = (req, res, next) => {
  try {
    const { a, b } = req.params;
    const result = parseInt(a) - parseInt(b);
    if (isNaN(result)) {
      throw new Error("Invalid input: Please provide valid numbers.");
    }
    res.status(200).send(`Result: ${result}`);
  } catch (error) {
    next(error);
  }
};

exports.multiply = (req, res, next) => {
  try {
    const { a, b } = req.params;
    const result = parseInt(a) * parseInt(b);
    if (isNaN(result)) {
      throw new Error("Invalid input: Please provide valid numbers.");
    }
    res.status(200).send(`Result: ${result}`);
  } catch (error) {
    next(error);
  }
};

exports.adding = (req, res, next) => {
  try {
    const { a, b } = req.body;
    const result = parseInt(a) + parseInt(b);
    if (isNaN(result)) {
      throw new Error("Invalid input: Please provide valid numbers.");
    }
    res.status(200).json(`Result: ${result}`);
  } catch (error) {
    next(error); 
  }
};

exports.removing = (req, res, next) => {
  try {
    const { a, b } = req.body;
    const result = parseInt(a) - parseInt(b);
    if (isNaN(result)) {
      throw new Error("Invalid input: Please provide valid numbers.");
    }
    res.status(200).json(`Result: ${result}`);
  } catch (error) {
    next(error);
  }
};

exports.multiplying = (req, res, next) => {
  try {
    const { a, b } = req.body;
    const result = parseInt(a) * parseInt(b);
    if (isNaN(result)) {
      throw new Error("Invalid input: Please provide valid numbers.");
    }
    res.status(200).json(`Result: ${result}`);
  } catch (error) {
    next(error);
  }
};
