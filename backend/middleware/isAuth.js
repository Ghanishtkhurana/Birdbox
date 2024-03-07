const jwt = require("jsonwebtoken");

const isAuth = (req, res, next) => {
  try {
    const token = req.cookies.bird_token;
    if (!token) {
      return res
        .status(401)
        .json({ message: "You need to login first", status: false });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ message: "Not verified", status: false });
    }
    req.profile = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: error.message, status: false });
  }
};

module.exports = isAuth;
