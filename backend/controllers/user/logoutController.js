const logoutController = async (req, res) => {
  try {
    // console.log("cookies =>", req.cookies);
    if (req.cookies.bird_token) {
      res.clearCookie("bird_token");
      res.status(200).send({ message: "Logout successfully", status: true });
    } else {
      res.status(400).send({
        message: "No cookie found. You are already logged out",
        status: false,
      });
    }
  } catch (error) {
    res.status(400).send({ message: error.message, status: false });
  }
};

module.exports = logoutController;
