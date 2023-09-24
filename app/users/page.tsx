'use client'


import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";



export default function App(){
    const [users,setUsers] = useState(null);
    const router = useRouter();

    useEffect(()=>{

    fetch('/api/users' , {cache : 'no-store'}).then(data => data.json()).then(data => setUsers(data))

    },[])

    console.log(users?.[0])



    return(
        <div>
            <h1>This is the users file .</h1>
           
            <button onClick={()=> router.push('/')}>Go back</button>
        </div>
    )
}