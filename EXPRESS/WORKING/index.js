import express from 'express'

const app = express()
const PORT = 3000

app.use(express.json());


app.use((req,res,next)=>{
    console.log('Middleware 1');
    res.on('finish',()=>{
        console.log('End!')
    })
    next()
})

app.use((req,res,next)=>{
    console.log('Middleware 2');
    res.on('finish',()=>{
        console.log('End!2')
    })
    next()
})

app.get('/',(req,res)=>{
    res.send('Hello!');
})

app.get('/error',()=>{
    throw new Error('Test error')
})

app.use((err,req,res,next)=>{
    console.error(err.message)
    res.send(err.message);
    next()
})

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`); //template literal
}) //port,callback