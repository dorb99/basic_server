require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

// const cors = require("cors");

const debug = require("debug")("server");

const mathRoutes = require("./routes/mathRoutes");
const logsRoutes = require("./routes/logsRoutes");

const { errorMiddleware, wrongTurn } = require("./services/errorHandling");

const {
  newCookie,
  cookieAuth,
  newJwt,
  newSession,
  jwtAuth,
  sessionAuth,
} = require("./services/authentication");
// const {
//   fileSubmit,
//   formSubmit,
//   timesVisited,
// } = require("./controllers/otherController");

const app = express();

// app.use(express.json())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// cors
// app.use(cors({ origin: "http://192.168.1.193:8080", credentials: true }));

app.use(express.static("assets"));

// html
// app.use(express.static("views"));

// Cookies
app.use("/newcookie", newCookie);
app.use("/*", cookieAuth);

// JWT
app.use("/newjwt", newJwt);
app.use("/*", jwtAuth);

// Sessions
const time = 60 * 60 * 1000; // 1 hour
app.use(
  session({
    secret: "yourSessionSecret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: time },
  })
);
app.use("/newsession", newSession);
app.use("/*", sessionAuth);

// $env:DEBUG="debuger's name*"; node fileName.js

debug("Started");
app.use("/math", mathRoutes);
app.use("/logs", logsRoutes);

// app.post("/form", formSubmit);

// session
// app.use("/times", timesVisited);

app.use(errorMiddleware);

app.use("*", wrongTurn);

const port = 3005;

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
