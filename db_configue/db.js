const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()


async function  connectDatabase(){
    try{
        await mongoose.connect(process.env.mongodb_uri,{
            dbName:process.env.mongodb_name
        })
        console.log("database connected successfully" + process.env.mongodb_name)
    }
    catch(error){
        console.log("Database Connected Successfully")
        console.log(error)
    }
}

module.exports={connectDatabase}