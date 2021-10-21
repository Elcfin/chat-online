let ws: null | WebSocket = null;

export const connect = () => {
  ws = new WebSocket("ws://localhost:3010");
  ws.onopen = () => {
    console.log("Connected successfully...");
  };
  ws.onclose = () => {
    console.log("Error");
  };
  ws.onmessage = (msg) => {
    console.log("Receive message", msg);
  };
};

export const sendMessage = () => {
  ws!.send("hello");
};
