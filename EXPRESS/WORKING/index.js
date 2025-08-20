import express from 'express'
// import { searchController, userController } from './controller.js';
//const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello World! Arjun!');
}) 

//about
app.get('/about',(req,res)=>{
    res.send('About message!');
}) 

//dynamic routing
// app.get('/user/:username',userController);

//querying string
// app.get('/search',searchController); //http://localhost:3000/search?keyword=abi

app.post('/user',(req,res)=>{
    const { name, email } = req.body;
    res.json({
         message:  `User is ${name} with email ${email}`
    })
});

app.put('/user/:abc',(req,res)=>{
    const uname = req.params.abc;
    const { name, email } = req.body;
    res.json({
         message:  `User ${uname} is updates to ${name} with email ${email}`
    })
});

app.delete('/user/:abc',(req,res)=>{
    const uname = req.params.abc;
    res.json({
         message: `User ${uname} is deleted`
    })
})

app.get('/thing/:name/:id',(req,res)=>{ //add regex id([0-9]{5})
    const {name,id} = req.params
    res.json({
        id,name
    })
})

// app.get('*',(req,res)=>{   // same regex error
//     res.send('url not fund chnage router!');
// })



app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`); //template literal
}) //port,callback