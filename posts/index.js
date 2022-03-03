const express = require("express");
const { randomBytes } = require("crypto");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  await axios.post(`http://localhost:4005/events`, {
    type: "POST_CREATED",
    data: {
      id,
      title,
    },
  });

  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log("post server is up at port 4000");
});
