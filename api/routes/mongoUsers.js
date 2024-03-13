const mongoose=require('mongoose')

mongoose.connect(
    "mongodb://mongodb:27017/db_anonymity_web_app", 
    { useNewUrlParser: true }
)
.then(()=>{
    console.log('SUCCESS: mongodb connection success');
})
.catch(()=>{
    console.log('FAIL: mongodb connection failed');
})


const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const usersCollection = mongoose.model('usersCollection', userSchema)

module.exports = usersCollection

