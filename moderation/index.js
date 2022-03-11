const express = require("express");
const app = express();

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.post("/events", async (req, res) => {
  const { type, data } = req.body;
  if (type === "COMMENT_CREATED") {
    const status = data.content.includes("orange") ? "rejected" : "approved";

    await axios.post("http://localhost:4005/events", {
      type: "COMMENT_MODERATED",
      data: {
        id: data.id,
        postId: data.postId,
        status,
        content: data.content,
      },
    });
  }
  res.send({});
});

app.listen(4003, () => {
  console.log("The server is up at port 4003");
});
