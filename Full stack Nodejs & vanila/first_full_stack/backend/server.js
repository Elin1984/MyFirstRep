const users = [
  { id: 1, firstName: "Jane", lastName: "Doe", age: 55 },
  { id: 2, firstName: "John", lastName: "Doe", age: 35 },
  { id: 3, firstName: "Johnny", lastName: "Doe", age: 50 },
];

const express = require("express");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.get("/all", (req, res) => {
  res.json(users);
});

app.get("/one/:id", (req, res) => {
  const user = users.find((el) => el.id == req.params.id);
  res.json(user || "User not found");
});

app.listen(3000, () => console.log("Running on 3000"));
