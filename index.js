const express =require("express");
const app = express();
app.set("view engine", "ejs");




let port = 4000;

app.listen(port , () => {
    console.log(`listing the port ${port}`);
});

app.get("/ig/:username", (req , res) => {
    let { username } = req.params;
    const instaData =require("./data.json");
    const data = instaData[username];
    if(data){
        res.render("insta.ejs", { data })
    } else {
        res.render("error.ejs");
    }
    
});

app.use("/",(req ,res) => {
    res.send("<h1>this is response fo page </h1>");
});




