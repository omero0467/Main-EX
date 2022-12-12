import mongoose from "mongoose";
import validator from 'validator'; 

mongoose.connect('mongodb://127.0.0.1:27017/tasks')

const User = mongoose.model('User', {
    name:{
        type: String,
        required:true,
        trim:true
    },
    age:{
        type: Number,
        default:0,
        validate(value){
            if (value<0){
                throw new Error('Age must be grater than 0')
            }
        },
    },
    email:{
        type: String,
        trim:true,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Not an EMAIL')
            }
        }
    },
    password:{
        type:String,
        required:true,
        minlength: 7,
        trim:true,
        validate(value){
            if (value.toLowerCase().includes('password')){
                throw new Error('Password cannot contain password')
            }
        }
    }
})

// const omer = new User ({
//     name:' Omer  ',
//     email:'omer@test.com  ',
//     password: ' pasd23 '
// })

// omer.save().then((res)=>{
//     console.log(omer);
// }).catch((error)=>{
//     console.log('Error', error);
//     })
// const Task = mongoose.model('Task', {
//     description: {
//         type:String,
//         required:true,
//         trim:true
//     },
//     completed:{
//         type:Boolean,
//         default:false
//     },
    
// });

// const task = new Task ({
//     description:'learn the mern stack',
//     completed:true
// })

// task.save().then(()=>{
// console.log(task);
// }).catch((error)=>{
//     console.log(error);
// })

// console.dir(validator.isMobilePhone);