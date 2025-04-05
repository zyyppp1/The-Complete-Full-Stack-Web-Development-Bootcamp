//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
var password='123'

var validpass = false;
function validPassword(req, res, next) {
    if (req.body.password === password) {
        validpass=true;
    }
    next();
}
app.use(validPassword);

app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/public/index.html");
});


app.post("/check", (req, res) => {
    if (validpass) {
      res.sendFile(__dirname + "/public/secret.html");
    } else {
      res.sendFile(__dirname + "/public/index.html");
      //Alternatively res.redirect("/");
    }
  });
  


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
