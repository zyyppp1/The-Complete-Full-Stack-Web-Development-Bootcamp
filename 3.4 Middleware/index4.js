import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

var bandname = "";
function bandnamegen(req, res, next) {
   bandname = req.body.street + " " + req.body.pet;
  next();
}
app.use(bandnamegen);

app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body)
  // const bandname = req.body.street + " " + req.body.pet;
  res.send(`<h1>Your band name is </h1><h2>${bandname}</h2>`);
});









app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
