const path = require("path");

const express = require("express");
const credentialsControl = require("../controllers/credentials");
const router = express.Router();

router.get("/", credentialsControl.getIndex);
router.get("/signup", credentialsControl.getSignup);
router.get("/login", credentialsControl.getLogin);
router.post("/login", credentialsControl.postLogin);

module.exports = router;
