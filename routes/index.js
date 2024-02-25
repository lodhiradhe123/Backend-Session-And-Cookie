var express = require("express");
var router = express.Router();
const userModel = require("./users");

router.get("/", function (req, res) {
  req.session.ban = true;
  res.render("index");
});
router.get("/checkban", function (req, res) {
  if (req.session.ban === true) {
    res.send("you are banned");
  } else {
    res.send("you are not ban");
  }
});
router.get("/removeban", function (req, res) {
  req.session.destroy(function (err) {
    if (err) throw err;
    res.send("ban removed");
  });
});

module.exports = router;
