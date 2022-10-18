const mongoose = require("mongoose");

const DesignationSchema = mongoose.Schema(
  {
    designationname: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = mongoose.model("tbl_designation", DesignationSchema);
