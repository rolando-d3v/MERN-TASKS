const express = require("express");
const cors = require("cors");

//CONFIG DE PROCESS
require("./config");

//CONFIG DB
require('./db')

const app = express();
const port = process.env.PORT;
app.listen(port, () => {
  console.log("server connected in " + port);
});
