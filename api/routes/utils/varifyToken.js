const jwt = require("jsonwebtoken");
const createError = require("../utils/error");

const varifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  console.log(token);
  if (!token) {
    return next(createError(401, "No token provided"));
  }
  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) {
      return next(createError(403, "Invalid token"));
    }
    req.user = user;
    next();
  });
};

const verifyUser = (req, res, next) => {
  varifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "Unauthorized User"));
    }
  });
};
const verifyAdmin = (req, res, next) => {
  varifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not Admin"));
    }
  });
};

module.exports = { varifyToken, verifyUser, verifyAdmin };
