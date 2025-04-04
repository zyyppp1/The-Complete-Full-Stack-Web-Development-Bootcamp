import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import { console as debugConsole } from "inspector";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 2000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  debugConsole.log("This might not show");
  console.log("This will show");

  res.sendFile(__dirname + "/public/index.html");
});

// Route to handle form submissions and log the submitted data
app.post("/submit", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

