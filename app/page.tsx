import Link from "next/link";
import {getServerSession} from 'next-auth'
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {

  const result = await getServerSession(authOptions)
  
  return (
      <div>
        <h1>This is the home page.</h1>
        {/* {status == 'loading' && <h1>Loading...</h1>} */}
        <h1>Name : {result!?.user?.name}</h1>
        <h1>Email : {result!?.user!.email}</h1>
        {!result!?.user  && <Link href="/api/auth/signin" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Login</Link> }
        {result!?.user && <Link href={'/api/auth/signout'} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" >Sign Out</Link>}
        <Link href={'/users'}>Users</Link>
      </div>
  )
}
  