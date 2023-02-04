require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server, {
  cors: "http://localhost:3000",
});

server.listen(process.env.PORT, () => {
  console.log("listening on:", process.env.PORT);
});
