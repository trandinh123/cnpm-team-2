require("dotenv").config();
const cors = require("cors");
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
require("./services/auth");
const { verifyAuthenticated } = require("./middlwares/auth");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const conversationRouter = require("./routes/conversation");
const messageRouter = require("./routes/message");

const app = express();
const server = http.createServer(app);
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5000",
    credentials: true,
  })
);

app.use(
  session({
    secret: "abc123",
    resave: false,
    saveUninitialized: true,
    cookie: { path: "/", httpOnly: true, maxAge: 36000000 },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/conversation", conversationRouter);
app.use("/message", messageRouter);
app.get("/", verifyAuthenticated, (req, res) => {
  return res.status(200).json({
    success: true,
    data: req.user,
  });
});

server.listen(process.env.PORT, () => {
  console.log("listening on:", process.env.PORT);
});

mongoose.connect(process.env.MONGODB_URI, (err) => {
  if (err) {
    return console.log(err.message);
  }
  return console.log("Database connnected successfully");
});

const io = new Server(server, {
  cors: process.env.SERVER_URL || "http://localhost:5000",
});
