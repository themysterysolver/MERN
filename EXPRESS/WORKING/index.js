//embedded js - ejs
import express from 'express'

const app = express()
const PORT = 3000


app.use(express.json());
app.use('/public',express.static('public')) //example.txt // public.example.txt

app.get('/',(req,res)=>{
    res.send('Hello Express!')
})





app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`); //template literal
}) //port,callback