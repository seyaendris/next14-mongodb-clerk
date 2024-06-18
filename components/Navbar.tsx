import Link from "next/link"
import {
    SignInButton,
    SignedIn,
    SignedOut, 
    UserButton, 
    useAuth
  } from '@clerk/nextjs'
import { auth } from "@clerk/nextjs/server"

const Navbar = async() => {
    const { userId } = await auth();
    const isAuth = !!userId;
  return (
    <ul className="flex justify-between m-10 items-center">
        <div>
            <Link href="/">
                <li>Home</li>
            </Link>
        </div>

        <div className="flex gap-10">
            {!isAuth ? (
            <>
            <Link href="/sign-in">
                <li>Login</li>
            </Link>
            <Link href="/sign-up">
                <li>Sign Up</li>
            </Link>
            </>

            ): (
            <>
               <Link href="/user-profile">
                <li>Profile</li>
               </Link>
               <li> <UserButton afterSignOutUrl="/" /> </li>
            </>

            )}
           
            
        </div>
    </ul>
  )
}

export default Navbar