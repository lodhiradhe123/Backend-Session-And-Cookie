var express = require("express");
var router = express.Router();
const userModel = require("./users");

router.get("/", function (req, res) {
  res.render("index");
});

// create
router.get("/create", async function (req, res) {
  const create = await userModel.create({
    username: "harsh",
    name: "harsh",
    age: 24,
  });
  res.send(create);
});

// read
router.get("/read", async function (req, res) {
  const read = await userModel.find();
  res.send(read);
});

// create
router.get("/delete", async function (req, res) {
  const deleteuser = await userModel.findOneDelete({
    username: "harsh",
  });
  res.send(deleteuser);
});

module.exports = router;
