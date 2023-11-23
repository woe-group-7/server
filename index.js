const express = require("express");

const app = express();

app.use(express.json());

let a = 0;

app.get("/", (req, res) => {
  console.log("Data requested");
  res.send("Hello world");
});

app.post("/data", (req, res) => {
  console.log(req.body);
  a = req.body.rssi_value;
  return res.send("Got Data");
});

app.get("/baby", (req, res) => {
  res.sendStatus(a === 0 ? 404 : 204);
});

app.listen(3000, () => console.log("server stated"));
