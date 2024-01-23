const express = require('express');
const app = express();


app.get('/getuser',(req,res)=>{
    res.json({body:req.query}); 
});


app.get('*',function(req,res){
    res.json({
        status:0,
        message:'Invalid request'
    });
});


app.post('/createuser',function(req,res){
    res.json({body : req.body});
});


app.listen(3000,()=>{
    console.log('Server is runing on 3000 port');
});

