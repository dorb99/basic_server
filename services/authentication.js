const session = require("express-session");
const jwt = require("jsonwebtoken");
const { timesVisited } = require("../controllers/otherController");

const time = 60 * 1000; 
exports.newCookie = (req, res) => {
  res.cookie("myServer", "ticket", { maxAge: time });
  res.json("Cookie set!");
};

exports.cookieAuth = (req, res, next) => {
  if (req.cookies.myServer === "ticket") {
    next();
  } else {
    throw new Error("Unauthorized access");
  }
};

exports.newJwt = (req, res) => {
  const token = jwt.sign({ authenticated: true }, process.env.JWT_SECRET, {
    expiresIn: "2h",
  });
  res.cookie("authToken", token);
  res.json("JWT cookie created. You can now access other routes.");
};

exports.jwtAuth = (req, res, next) => {
  const token = req.cookies.authToken;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err) => {
      if (err) {
        res.status(403).json("Unauthorized: Invalid token.");
      } else {
        next();
      }
    });
  } else {
    res.status(403).json("Unauthorized: No token present.");
  }
};

exports.newSession = (req, res) => {
  req.session.page_views = 1;
  req.session.authenticated = true;
  res.json("Session cookie created. You can now access other routes.");
};

exports.sessionAuth = (req, res, next) => {
  if (req.session.authenticated) {
    req.session.page_views++
    next();
  } else {
    throw new Error("Unauthorized: No session cookie present");
  }
};
