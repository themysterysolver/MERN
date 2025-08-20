import express from 'express'
import { searchController, userController } from './controller.js';
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
app.get('/user/:username',userController);

//querying string
app.get('/search',searchController); //http://localhost:3000/search?keyword=abi

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`); //template literal
}) //port,callback