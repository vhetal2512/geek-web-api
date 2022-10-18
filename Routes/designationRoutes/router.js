const express = require("express");
const router = express.Router();
const { setDesignation,getAllDesignation} = require("../../Controller/designationController/designationController");

router.route("/add-designation").post(setDesignation);
router.route("/get-designation").get(getAllDesignation);
module.exports = router;