const express = require("express");
// we now creating an http server instances
const app = express();

// api -> get: local host:300/ -> hello everyone  from express
app.get("/", (req, res) => {
  // 1. data from frontend

  // 2. db logic

  // 3. data to frontend

  res.send("hello world  from express");
});


// api -> get: local host:300/car -> car everyone  from express

app.get("/car",(req,res)=>{

    // 1. data  form frontend





    //  db logic






   //  3. data to backend


res.send("car everyone  from express")



})






// api -> post: local host:300/car -> car everyone  from express

app.post("/car",(req,res)=>{

    // 1. data  form frontend





    //  db logic






   //  3. data to backend


res.send("car everyone  from express post")



})
app.listen(3000);
