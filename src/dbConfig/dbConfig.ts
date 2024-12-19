import { log } from "console";
import exp from "constants";
import mongoose from "mongoose";

// export async function connect() {
//     try{
//         mongoose.connect(process.env.MONGO_URI!)
//         const connection = mongoose.connection;

//         connection.on('connected',()=>{
//             console.log('mongo connected successfully...')
//             process.exit();
//         })
//     }catch(error){
//         console.log(error);
        
//     }
// }

export async function connect() {
    try{
        mongoose.connect('mongodb://localhost:27017/firstdb')
        const connection = mongoose.connection;

        connection.on('connected',()=>{
            console.log('mongodb connected successfully...')
            // process.exit();
        })
    }catch(error){
        console.log(error);
        
    }
}