const express = require('express');
const app = express();

app.use({})


app.get('/getbyId:id',auth,(req,res)=>{
  req.params.id
    console.log('HEllo');
});

app.get('/getbyId:id',auth,(req,res,next)=>{

  req.params.id
    console.log('HEllo');
});
localhost:3000/test/satish/
localhost:3000/getbyId/1
localhost:3000/getbyId/one

const port = process.env.PORT;
app.listen(port,function(){
  console.log("Server is running on port 3000");
  
});


let arra = [1,2,3,4,4];



