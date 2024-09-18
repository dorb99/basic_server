const express = require("express");
const app = express();

const mathRoutes = require("./routes/mathRoutes");
const logsRoutes = require("./routes/logsRoutes");
const { auth, errorMiddleware } = require("./services/services");

app.use(express.json());

app.use(express.static("assets"));

app.use("/*", auth);

app.use("/math", mathRoutes);
app.use("/logs", logsRoutes);

app.use("/file", (req, res, next) => {
  try {
    res.sendFile(path.join(__dirname, "example.html"));
  } catch (error) {
    next(error);
  }
});
app.use(errorMiddleware);

app.use("*", (req, res) => {
  res.status(404).send("Wrong place");
});

const port = 3000;

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
