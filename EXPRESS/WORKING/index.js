import express from 'express'

const app = express()
const PORT = 3000

app.use(express.json());


app.use((req,res,next)=>{
    console.log('A new req recieved at'+Date.now());
    next()
})

app.get('/',(req,res)=>{
    res.send('Hello World! Arjun!');
}) 



app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`); //template literal
}) //port,callback