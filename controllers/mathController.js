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
