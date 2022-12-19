import express, { json } from 'express'
import './db/mongoose.js'
import userRouter from './routers/user.js'
import taskRouter from './routers/task.js'
// import bcryptjs from "bcryptjs"
// import jwt from 'jsonwebtoken'


const app = express()
const port = process.env.PORT || 3000

// app.use((req,res,next)=>{
//     if(req.method ==='GET'){
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req,res,next)=>{
//     if(req){
//         res.status(503).send('Site is under maintenance please comeback soon')
//     } else {
//         next()
//     }
// })

app.use(json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


const myFunction = async () =>{
//     const password = "Red12345!"
//     const hasedPassword = await bcryptjs.hash(password,8)
//     console.log(password)
//     console.log(hasedPassword);

//     const isMatch = await bcryptjs.compare("123",hasedPassword)
//     console.log(isMatch);

// //jwt intro
    // const token = jwt.sign({ _id:"123abc" },'thisismynewcourse',{ expiresIn: '07 days' });
    // const data = jwt.verify(token,"thisismynewcourse")
    // console.log(token);
    // console.log(data);


}
myFunction()