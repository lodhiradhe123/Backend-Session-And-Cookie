var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.cookie("age", 24);
  res.render("index");
});

router.get("/read", function (req, res) {
  console.log("req.cookies.age");
  res.send("check");
});

router.get("/delete", function (req, res) {
  res.clearCookie("age");
  res.send("cookie clear ho gai ");
});

module.exports = router;
