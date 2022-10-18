const mongoose =require("mongoose")

const dbConnect=async()=>{
    try{
        const conn= await mongoose.connect(process.env.MONGO_URI)
    
        console.log(conn.connection.host,"connection uri");
    }catch(err){console.log("error",err);
        process.exit(1)        
}
}

module.exports = dbConnect