//embedded js - ejs
import express from 'express'

const app = express()
const PORT = 3000

// set EJS as view engine
app.set('view engine','ejs')

app.use(express.json());


app.get('/',(req,res)=>{
    const username = 'Arjun'
    res.render('index',{username});
})


app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`); //template literal
}) //port,callback