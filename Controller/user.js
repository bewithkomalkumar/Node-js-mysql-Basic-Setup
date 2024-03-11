const User = require("../Model/user");

const postUser = async (req, res, next) => {
  try {
    console.log("inside post user");
    const { firstname, lastname, email, password } = req.body;
    if (firstname && lastname && email && password) {
      let user = await User.create({ firstname, lastname, email, password });

      user = user.toJSON();

      return res.status(200).send({ message: "Success", data: user });
    }

    res.status(206).send({ message: "Fields are missing or incorrectly typed" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = {
  postUser,
};
