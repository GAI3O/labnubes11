import mongoose from "mongoose";

mongoose.Promise = global.Promise;


const connect = async (url) =>{
    mongoose.connect(url,{
        useNewUrlParser:true,
    })
    console.log("[db] connect")
}

export default connect;