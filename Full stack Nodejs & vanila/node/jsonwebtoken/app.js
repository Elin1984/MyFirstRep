const express = require("express");
const app = express();

const users = [{ id: 1, username: "jane", password: "123456" }];
const posts = [
  { title: "I love cats", userId: 1 },
  { title: "I love dogs", userId: 5 },
  { title: "I love food", userId: 3 },
];

app.use(express.json());

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const userByUsername = users.find((user) => user.username === username);
  if (userByUsername === undefined || userByUsername.password !== password)
    return res.status(404).json("Username or password didn't match");

  res.send(userByUsername);
});

app.get("/getPost/:userId", (req, res) => {
  const postsByUser = posts.filter((post) => post.userId == req.params.userId);
  res.send(postsByUser);
});

app.listen(3000, () => console.log("Rock & Roll"));
