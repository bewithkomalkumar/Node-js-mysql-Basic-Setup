const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const sequelize = require("./DB/db");
const userRoute = require("./Routes/user");

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use(cors());
app.use(morgan("tiny"));

app.use("/user", userRoute);

app.get("/", async (req, res) => {
  try {
    res.send({ message: "Server is running" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

app.listen(8000, () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log("DataBase is connected Successfully !");
    })
    .then(() => {
      console.log("Server is listening to http://localhost:8000");
    })
    .catch((err) => {
      console.log("Error in conneting database", err);
    });
});
