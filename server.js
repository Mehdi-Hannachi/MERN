const express = require("express");
const connect = require("./config/connectDB");
// instanciation
const app = express();

// middleware
app.use(express.json());
// connect to DB
connect();

// routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));
app.use("/api/profiles", require("./routes/profile"));
app.use("/api/posts", require("./routes/post"));

// port
const port = 5000;
app.listen(port, (err) => {
  err ? console.log(err) : console.log(`server is running on port ${port}`);
});
