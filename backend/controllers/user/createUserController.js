const userModel = require("../../models/user/user.schema");
const bcrypt = require("bcrypt");
const sendToken = require("../../utils/sendToken");

const createUserContoller = async (req, res) => {
  try {
    const { name, username, password } = req.body;
    // console.log("req.body", req.body);
    // console.log("req.file", req.file);
    let avatar = {
      public_id: "sdfj923",
      url: "url.com",
    };

    if (!name || !username || !password) {
      return res
        .status(400)
        .json({ message: "All fields are required", status: false });
    }
    const hashPass = await bcrypt.hash(password, 10);
    const createUser = new userModel({
      name,
      username,
      password: hashPass,
      avatar: avatar,
    });
    await createUser.save();
    sendToken({
      res,
      user: createUser,
      code: 201,
      message: "User created successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message, status: false });
  }
};

module.exports = createUserContoller;
