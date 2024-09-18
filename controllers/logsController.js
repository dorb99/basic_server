exports.hello = (req, res, next) => {
  try {
    const { name } = req.params;
    if (!name) {
      throw new Error("Name parameter is missing.");
    }
    res.status(200).send(`Hey ${name}, I'm Moshe`);
  } catch (error) {
    next(error);
  }
};

exports.bye = (req, res, next) => {
  try {
    const { name } = req.params;
    if (!name) {
      throw new Error("Name parameter is missing.");
    }
    res.status(200).send(`Bye ${name}, was nice seeing you`);
  } catch (error) {
    next(error);
  }
};

exports.run = (req, res) => {
  try {
    res.status(200).send(`Oh shit, I need to run!!`);
  } catch (error) {
    next(error);
  }
};
