const express=require('express')
   

const app=express()

app.get('/',(req,res)=>{
    res.send("helo")
})
console.log("aeskjfasjfkasjkfjje");

console.log("adfaksgkfknkcvkafnk");

app.listen(3000,()=>{
    console.log("Server is runing");
    
})