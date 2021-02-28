const jwt = require("jsonwebtoken");

exports.generateAccessToken = (user) => {
  // expires after half and hour (1800 seconds = 30 minutes)
  // user is in the form of {username: String, user_id: String}
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1800s",
  });
};

exports.verifyToken = (token) => {
  // verifies user and returns token data
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    console.log(err);
    return user;
  });
};

// JWT Token Verification Middleware
exports.authenticateToken = (req, res, next) => {
  // Gather the jwt access token from the request header
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401); // if there isn't any token

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
        return res.sendStatus(403);
    }
        req.user = user;
    next(); // pass the execution off to whatever request the client intended
  });
};
