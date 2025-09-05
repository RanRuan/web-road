const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8888 });

wss.on("connection", (ws) => {
  console.log("客户端已连接");

  // 接收消息
  ws.on("message", (message) => {
    console.log("收到客户端消息:", message.toString());

    // 回复消息
    ws.send(`服务器收到: ${message}`);
  });

  // 断开连接
  ws.on("close", () => {
    console.log("客户端断开连接");
  });
});

console.log("WebSocket 服务器已启动，ws://localhost:8080");
