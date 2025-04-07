import express from 'express';
import ejs from 'ejs';

const app=express();
const port = 3000;


app.get("/",(req,res) => {
    const d = new Date();
    let day = d.getDay();
    let type = "weekday";
    let adv = "Start work!";

    if(day == 0 || day == 6){
        type = "Weekend";
        adv = "Enjoy your weekend!";
    }
    res.render("index.ejs", {
        daytype: type,
        advice: adv,
    });

})


app.listen(port,() => {
    console.log(`Listening on port ${port}`);
});

