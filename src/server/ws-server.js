const ws = require("ws");
const { v4: uuidv4 } = require("uuid");
const { Server } = ws;
const users = {};
const messages = [];

const wsServer = new Server({ port: 8000 });
wsServer.on("connection", (ws) => {
  const id = uuidv4();
  const destination = "";
  users[id] = ws;

  console.log(`New user id: ${id}`);

  // function sendMessage(type = "none", userId, name = "", message = "") {
  //   console.log("sendMessage");
  //   for (const id in users) {
  //     users[id].send(JSON.stringify([
  //         {
  //           type: type,
  //         },
  //         {
  //           userId: id,
  //           name: name,
  //           message: message,
  //         },
  //       ])
  //     );
  //   }
  // }

  for (const id in users) {
    users[id].send(JSON.stringify([
        {
          type: "user",
        },
        {
          userId: id,
          name: "",
          message: `User id: ${id} joined`,
        },
      ])
    );
  }

  ws.on("error", console.error);

  ws.on("open", function open() {
    console.log("ws.open");
  });

  ws.on("message", (rawMessage) => {
    const receivedMessage = JSON.parse(rawMessage);
    console.log(receivedMessage);

    for (const id in users) {
      users[id].send(JSON.stringify([
          {
            type: receivedMessage[0].type,
          },
          {
            userId: receivedMessage[1].userId,
            name: receivedMessage[1].name,
            message: receivedMessage[1].message,
          },
        ])
      );
    }
  });

  ws.on("close", () => {
    delete users[id];
    console.log(`User ${id} is closed`);
  });
});
