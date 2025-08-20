//embedded js - ejs
import express from 'express'
import multer from 'multer'

const app = express()
const PORT = 3000
const upload = multer()


app.use(express.urlencoded({extended:true})); 
//app.use(upload.array())
app.use(upload.single('image'))

app.get('/',(req,res)=>{
    res.send('Hello Express!')
})

app.post('/form',(req,res)=>{
    console.log(req.body);
    console.log(req.file);
    res.send('Form recieved')
})




app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`); //template literal
}) //port,callback