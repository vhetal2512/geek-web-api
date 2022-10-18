const express = require("express");
const router = express.Router();
const { addUserRole,getUserRoles} = require("../../Controller/usrRoleController/index");

router.route("/add-user-role").post(addUserRole);
router.route("/getall-user").get(getUserRoles);
module.exports = router;