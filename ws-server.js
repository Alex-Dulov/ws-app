const ws = require("ws");
const { v4: uuidv4 } = require("uuid");

const { Server } = ws;
const users = {};

const wsServer = new Server({ port: 8888 });
wsServer.on("connection", (ws) => {
  const id = uuid();
  users[id] = ws;

  console.log(`New user id: ${id}`);

  ws.on("message", (rawMessage) => {
    console.log("");
  });

  ws.on("close", () => {
    delete users[id];
    console.log(`User ${id} is closed`);
  });
});
