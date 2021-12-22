const mongoose = require("mongoose");
const config = require("config");

// const connectDB=()=>{
//     mongoose.connect(config.get("MONGOURI"),{ useNewUrlParser: true, useUnifiedTopology: true })
//     .then(()=>console.log("mongoose connected"))
//     .catch(err=> console.log(err))
// }
const connectDB = async () => {
  try {
    await mongoose.connect(config.get("MONGOURI"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("mongoose connected");
  } catch (err) {
    console.log(err);
  }

  // mongoose.connect(config.get("MONGOURI"),{ useNewUrlParser: true, useUnifiedTopology: true })
  // .then(()=>console.log("mongoose connected"))
  // .catch(err=> console.log(err))
};
module.exports = connectDB;
