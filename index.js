const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World! This Project Express</h1>");
});

app.get("/api/data", (req, res) => {
  const data = { message: "Json Data Response", nama: "rizki padilah" };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
