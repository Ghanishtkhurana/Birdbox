const jwt = require("jsonwebtoken");

const cookieOption = {
  maxAge: 15 * 24 * 60 * 60 * 1000,
  sameSite: "none",
  secure: true,
  httpOnly: true,
};

const sendToken = ({ res, user, code, message }) => {
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.status(code).cookie("bird_token", token, cookieOption).json({
    success: true,
    message,
  });
};

module.exports = sendToken;
