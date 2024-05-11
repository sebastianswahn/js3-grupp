import { SignedIn, SignedOut } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { useClerk } from '@clerk/nextjs'
import { SignOutButton } from "@clerk/nextjs";

function Navbar() {
  return (
    <div className='flex h-9 text-white justify-between px-14 bg-slate-800'>
        <div>Logo</div>
        <SignedIn>
        <SignOutButton className="hover:bg-slate-500">Logout</SignOutButton>

        </SignedIn>
        <SignedOut>
        <Link href="/sign-in">Sign in</Link>
        </SignedOut>
    </div>
  )
}

export default Navbar