const mongoose = require("mongoose");

const db = process.env.URLDB

mongoose.connect(
  db,
  {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  },
  () => {
    console.log("db conected");
  }
);
