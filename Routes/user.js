const express = require("express");
const { postUser } = require("../Controller/user");
const { checkAlreadyExist } = require("../middleware/user");

const userRoute = express.Router();

userRoute.get("/", async (req, res) => {
  res.status(200).send({ message: "user router is receving request" });
});
userRoute.post("/adduser", checkAlreadyExist, postUser);

module.exports = userRoute;
