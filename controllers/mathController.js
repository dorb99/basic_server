exports.add = (req, res) => {
  const { a, b } = req.params;
  const result = parseInt(a) + parseInt(b);
  res.status(200).send(`Result: ${result}`)
};
exports.remove = (req, res) => {
  const { a, b } = req.params;
  const result = parseInt(a) - parseInt(b);
  res.send(`Result: ${result}`)
};
exports.multiply = (req, res) => {
  const { a, b } = req.params;
  const result = parseInt(a) * parseInt(b);
  res.send(`Result: ${result}`)
};
