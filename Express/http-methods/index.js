const express = require("express");
const { v4: uuidv4 } = require("uuid");
const app = express();
const PORT = 5000;
const students = [];

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>welcome to node express api</h1>");
});

app.get("/get", (req, res) => {
  if (students.length > 0) {
    console.log("if");
    res.status(200).send(students);
  } else {
    console.log("else");
    res.status(204).send(students);
  }
});

app.post("/addOne", (req, res) => {
  const uniqueId = uuidv4();
  const newObj = { _id: uniqueId, ...req.body };

  students.push(newObj);
  res.status(201).json({ id: uniqueId, message: "created successfully" });
});

app.post("/addMany", (req, res) => {
  const data = req.body;

  if (data !== 0) {
    data.map((obj) => {
      const uniqueId = uuidv4();
      students.push({ _id: uniqueId, ...obj });
    });
    res.status(201).send("created multiple students");
  }

  res.status(204).send("please add any data to post");
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
