import Link from "next/link";

export default function Home() {
  return (
      <div>
        <h1>This is the home page.</h1>
        <Link href={'/users'}>Users</Link>
      </div>
  )
}
