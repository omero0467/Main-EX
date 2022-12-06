import express,{ Router } from "express";
import bodyParser from 'body-parser'

const app = express()
const router = Router()
const PORT = 5001

router.get('/numbers',(req,res)=>{
    console.log("in router");
    res.send(`success using GET`)
});

router.post('/numbers',(req,res)=>{
    res.send("Success using POST")
})

router.delete('/numbers/delete', (req,res)=>{
    res.send("Successfuly deleted")
})

router.patch('/numbers',(req,res)=>{
    res.send("Successfuly Patched")
})




// app.get('/numbers', (req,res)=>{
//     res.send("success using GET")
// })

app.use(bodyParser.json())
app.use('/',router)



app.listen(PORT, ()=> console.log("Server is running on ", PORT))