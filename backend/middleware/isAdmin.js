const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const header = req.get("Authorization");
  // if admin header doesnt exist then throw authentication error
  if (!header) {
    const error = new Error("Unauthenticated admin");
    error.statusCode = 401;
    throw error;
  }
  const token = header.split(" ")[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, "seplacementportal");
  } catch (err) {
    const error = new Error("Authorization failed");
    error.statusCode = 401;
    throw error;
  }
  if (!decodedToken || decodedToken.isAdmin) {
    const error = new Error("Authorization failed");
    error.statusCode = 401;
    throw error;
  }
  next();
};
