import express from "express";
const app = express();
const port = 30000;

app.listen(port,() =>{
    console.log(`Server running on port ${port}.`);
})

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>");
  });
  
app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1><p>My name is Joey</p>");
  });
  
app.get("/contact", (req, res) => {
    res.send("<h1>Contact Me</h1><p>Phone: +447900218816</p>");
  });
  