import express from "express";
const app = express();
const port = 30000;

app.listen(port,() =>{
    console.log(`Server running on port ${port}.`);
})  ç