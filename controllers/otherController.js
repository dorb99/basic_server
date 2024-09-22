exports.timesVisited = (req, res) => {
  res.json("You visited this page " + req.session.page_views + " times");
};

exports.formSubmit = (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "Form data received!", data: req.body });
};
