const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.post("/events", async (req, res) => {
  const event = req.body;

  await axios.post("http://localhost:4000/events", event);
  await axios.post("http://localhost:4001/events", event);
  await axios.post("http://localhost:4002/events", event);

  res.send({ status: "ok" });
});

app.listen(4005, () => {
  console.log("The server is up at port 4005");
});
