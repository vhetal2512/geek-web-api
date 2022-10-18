const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const dbConnect = require("./Config/dbConnection");
const port = process.env.PORT;

dbConnect();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/users", require("./Routes/routes"));
app.use("/api/designation",require("./Routes/designationRoutes/router"));
app.use("/api/userRoles",require("./Routes/userRolesRoutes/index"));


app.listen(port, () => console.log(`Server started on port ${port}`));