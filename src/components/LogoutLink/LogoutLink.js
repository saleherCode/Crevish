"use client";

import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


export default function LogoutLink(){

    const router = useRouter();

    const logout = async () => {
        try {
            await axios.get('/api/users/logout');
            toast.success("Logout Successfully.");
            router.push('/');
            
        } catch (error) {
          console.log("Fail to Logout", error.message);
        }
    }

    return(
        <button onClick={logout}>Logout</button>
    )
}