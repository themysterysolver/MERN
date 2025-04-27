const express=require('express')
const app=express()
const mongoose=mongoose()
const User=require('./model/user')
console.log(express.version)
app.use(express.json())

async function connect(){
    try{
        let host= await mongoose.connect("mongodb+srv://arjunprabhakar1910:nerdforever@mydb.tdb6lye.mongodb.net/")
    }catch(e){
        console.log(e);
    }
}
app.listen(3001,()=>{
    console.log("running");
})
app.get('/',(req,res)=>{
    res.send('dope...');
})
app.post('/form',(req,res)=>{
    console.log(res.body)
    let data=res.body;
    let udata=User(data);
    udata.save();
});

//onsole.log(a);
//module.exports=a;