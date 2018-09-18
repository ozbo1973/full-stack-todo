// Full-stack-todo -index.js
// main express server page.

const express = require("express"),
  bodyParser = require("body-parser"),
  todoRoutes = require("./routes");
(app = express()), (PORT = process.env.PORT || 5000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Server up");
});

app.use("/api/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
