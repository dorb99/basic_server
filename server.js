const express = require("express");
const app = express();

const mathRoutes = require("./routes/mathRoutes");
const logsRoutes = require("./routes/logsRoutes");

app.use(express.json());

app.use("/math", mathRoutes)
app.use("/logs", logsRoutes)

const port = 3000;

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});

