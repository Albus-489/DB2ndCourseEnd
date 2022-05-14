const mongoose = require("mongoose");

var connstrCloud =
  "mongodb+srv://ivan:123qwe@cluster0.upjsx.mongodb.net/Lab8db";

mongoose.connect(connstrCloud, (err) => {
  if (!err) {
    console.log("Connection ---> Success!");
  } else {
    console.log("Connection ---> Error! " + err);
  }
});

module.exports = mongoose;
