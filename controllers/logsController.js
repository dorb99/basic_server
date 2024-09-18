exports.hello = (req, res) => {
  const { name } = req.params;
  res.send(`Hey ${name}, I'm moshe`);
};
exports.bye = (req, res) => {
  const { name } = req.params;
  res.send(`Bye ${name}, was nice seeing you`);
};
exports.run = (req, res) => {
  res.send(`Ow shit I need to run!!`);
};
