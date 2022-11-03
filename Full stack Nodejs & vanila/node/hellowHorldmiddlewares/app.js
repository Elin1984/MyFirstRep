const express = require("express");
const app = express();

function dogErrorHandler(error, req, res, next) {
  switch (error) {
    case "id not found":
      res.status(404).json("not found");
      break;
    case "dog is private":
      res.status(401).json("sorry this dig is private");
      break;

    default:
      break;
  }
}

let lastTime;

const dogs = [
  { id: 1, name: "flaffy" },
  { id: 2, name: "snow" },
];

app.get("/dog/:id", (req, res, next) => {
  const dogById = dogs.find((dog) => dog.id == req.params.id);
  if (!dogById) next("dog is private");
  res.json(dogById);
});

app.use(dogErrorHandler);

app.listen(3000, () => console.log("App running on 3000"));

// function middleware1(req, res, next) {
//   console.log("Im middleware 1#");
//   next();
// }

// function middleware2(req, res, next) {
//   console.log("Im middleware 2#");
//   next();
// }

// let firstName = "Jane";

// function requestTimeMiddleware(req, res, next) {
//   const date = new Date();
//   const nowDate = date.toLocaleString("en-US");

//   req.requestTime = nowDate;
//   next();
// }

// app.use(requestTimeMiddleware);

// app.get("/getName", (req, res) => {
//   res.send(`The name is ${firstName} and request at ${req.requestTime}`);
// });

// app.get("/something", (req, res) => {
//   res.send(` something and request at ${req.requestTime}`);
// });

// app.get(
//   "/boo",
//   middleware1,
//   middleware2,
//   (req, res, next) => next(),
//   (req, res) => res.send("blah blah blah")
// );

// function middlewareFoo(req, res, next) {
//   console.log("im foo middleware");
//   const text = "this is from middlewareFoo";
//   next();
// }

// app.get("/foo", middlewareFoo, (imFromLastMiddleware, req, res) => {
//   console.log(imFromLastMiddleware);
//   res.send("foo");
// });
