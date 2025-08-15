const express =require("express");
const app = express();
app.set("view engine", "ejs");
app.use('/dices', express.static(__dirname + '/dices'));



let port = 4000;

app.listen(port , () => {
    console.log(`listing the port ${port}`);
});

app.get("/rolldice", (req, res) => {
    let num = Math.floor(Math.random() * 6) + 1;
    let pathimg = "dices/rolldice" + num + ".jpg" ;
    console.log(pathimg);
    res.render("rollDice.ejs", {num , pathimg });
});

app.use("/",(req ,res) => {
    res.send("<h1>this is response fo page </h1>");
});




