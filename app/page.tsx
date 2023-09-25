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
        {!result!?.user  && <Link href="/api/auth/signin">Login</Link> }
        {result!?.user && <Link href={'/api/auth/signout'}>Sign Out</Link>}
        <Link href={'/users'}>Users</Link>
      </div>
  )
}
