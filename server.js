const express= require('express')
const mongoose = require('mongoose');

const app=express();

app.get('/about',(req,res)=>{
    res.send('Hello Node api');
})


mongoose.connect('mongodb+srv://demonm6404:demon6404@restapi.ut7gysr.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    app.listen(3000, ()=>{
        console.log(`Node is running on port 3000`)
    })
    console.log('connected to mongodb')
})
.catch((err)=>{
    console.log(err);
})