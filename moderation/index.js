const express = require("express");
const app = express();

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.post("/events", (req, res) => {
  const { type, data } = req.body;
  if(type === 'COMMENT_CREATED'){
      
  }
  res.send("Hello world");
});

app.listen(4003, () => {
  console.log("The server is up at port 4003");
});
