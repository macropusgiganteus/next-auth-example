import { getProviders, signIn } from "next-auth/react"
import Link from "next/link"

export default function SignIn() {
  return (
    <>
      <h1>this is custom sign in page</h1>
      <Link href="/"> go to home </Link>
    </>
  )
}
