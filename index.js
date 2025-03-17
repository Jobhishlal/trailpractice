const express=require('express')
   

const app=express()

app.get('/',(req,res)=>{
    res.send("helo")
})
console.log("dsnjknjkfsvjkbjksbkjfdnv");
console.log("reset");


app.listen(3000,()=>{
    console.log("Server is runing");
    
})