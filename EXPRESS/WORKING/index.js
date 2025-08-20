import express from 'express'
//const express = require('express')
const app = express()
const PORT = 3000
app.get('/',(req,res)=>{
    res.send('Hello World! Arjun!');
}) 

//about
app.get('/about',(req,res)=>{
    res.send('About message!');
}) 

//dynamic routing
app.get('/user/:username',(req,res)=>{
    const username = req.params.username;
    res.send(`Welcome home ${username}`);
});

//querying string
app.get('/search',(req,res)=>{
    const keyword = req.query.keyword;
    res.send(`searching for ${keyword}`);
}); //http://localhost:3000/search?keyword=abi

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`); //template literal
}) //port,callback