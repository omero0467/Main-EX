import { set, connect } from 'mongoose'
set('strictQuery',false)
connect('mongodb://127.0.0.1:27017/task-manager-api', {
})