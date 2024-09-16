import express from "express";
import http from "http";
import { Server } from "socket.io";
import { askQuestion, saveReply, sendOptions } from "./aurora.js";
import { checkUserAccess } from "./users.js";

// Create an instance of Express
const app = express();
const port = 3000; // Replace with your desired port number

// Create an HTTP server instance
const server = http.createServer(app);
const io = new Server(server);

// Define a route
app.get("/", (req, res) => {
  res.send("Hello, world!"); // Send a response to the client
});

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);
  const user_id = socket.handshake.query.user_id;

  if (!checkUserAccess(user_id)) {
    let question = 0;
    socket.emit("question", askQuestion(question));

    socket.on("answer", (answer) => {
      saveReply(answer);
      if (question <= 3) {
        if (question === 3 && answer) {
          console.log(question)
          socket.emit("options", sendOptions());
        }
        question += 1;
        socket.emit("question", askQuestion(question));
      }
    });
  }

  socket.on("close", () => {
    console.log("A user disconnected:", socket.id);
  });
});

// Start the server
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
