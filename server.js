require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const cors = require("cors");

const mathRoutes = require("./routes/mathRoutes");
const logsRoutes = require("./routes/logsRoutes");
const {
  errorMiddleware,
  wrongTurn,
  serverErrors,
} = require("./services/errorHandling");
const {
  newCookie,
  cookieAuth,
  newJwt,
  newSession,
  jwtAuth,
  sessionAuth,
} = require("./services/authentication");
const {
  fileSubmit,
  formSubmit,
  timesVisited,
} = require("./controllers/otherController");

const app = express();

const corsOptions = {
  origin: "http://127.0.0.1:8080",
  methods: ['GET', 'POST', 'OPTIONS']
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());


app.use(express.static("assets"));
app.use(express.static("public"));

// // Cookies
// app.use("/newcookie", newCookie);
// app.use("/*", cookieAuth);

// JWT
app.use("/newjwt", newJwt);
app.use("/*", jwtAuth);

// // Sessions
// const time = 60 * 60 * 1000;
// app.use(
//   session({
//     secret: "yourSessionSecret",
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false, maxAge: time },
//   })
// );
// app.use("/newsession", newSession);
// app.use("/*", sessionAuth);

app.get("/error", (req, res)=>{
  res.sendFile("./public/error.html")
})

app.use("/math", mathRoutes);
app.use("/logs", logsRoutes);

app.post("/form", formSubmit);

// session-used
// app.use("/times", timesVisited);

app.use(errorMiddleware);
app.use("*", wrongTurn);

app.listen(PORT || process.env.PORT, (err) => {
  if (err) {
    serverErrors(err);
  } else {
    console.log(`listening on port ${process.env.PORT}`);
  }
});
