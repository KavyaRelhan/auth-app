"use client"
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function ProfilePage(){
    const router = useRouter();
    const onLogout = async ()=>{
        try{
            await axios.get('/api/users/logout')
            toast.success("Login successful")
            router.push('/login')
        }catch(error:any){
            console.log(error.message);
            toast.error(error.message)
        }

    }
    return (
        <div>
            <h1>Profile</h1>
            <hr/>
            <p>Profile page</p>
            <hr/>
            <button onClick={onLogout} className="p-2 border border-gray-300 rounded-lg mb-4  focus:outline-none focus:border-gray-600 text-white ">Logout</button>
        </div>
    )
}