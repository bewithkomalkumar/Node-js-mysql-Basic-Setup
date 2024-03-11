const User = require("../Model/user");

const checkAlreadyExist = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (email) {
      let user = await User.findOne({ where: { email } });
      if (user) return res.status(409).send({ message: "User is aleardy Exists" });

      next();
      return;
    }

    return res.status(206).send({ message: "Fields are missing or incorrectly typed" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = {
  checkAlreadyExist,
};
