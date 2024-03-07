const userModel = require("../../models/user/user.schema");
const bcrypt = require("bcrypt");
const sendToken = require("../../utils/sendToken");

const loginController = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "All fields are required", status: false });
    }
    const user = await userModel.findOne({ username }).select("+password");
    if (!user) {
      return res.status(400).json({ message: "User not found", status: false });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res
        .status(400)
        .json({ message: "Incorrect Password", status: false });
    }
    sendToken({
      res,
      user,
      code: 200,
      message: "Login successful",
    });
  } catch (error) {
    return res.status(400).send({ message: error.message, status: false });
  }
};


module.exports = loginController;   