const express = require("express");
const app = express();




app.use("/" , (req,res)=>{
    res.send(`Server started`)
})


app.listen(3100, ()=>{
    console.log(`Server started at port 3100`);
})