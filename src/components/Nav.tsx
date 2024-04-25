"use client"

import { UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Nav = () => {

    const {user, isLoaded} = useUser();

  return (
    <header>
        <nav className='flex items-center justify-center p-6 lg:px-8 h-20 border-b-2 border-blue-700' aria-label="Global">
            <div className='flex lg:flex-1'>
                <Link href={"/"} className='p-1'>
                    Next.js Auth
                </Link>
            </div>
            {
              isLoaded && user ? 
                <>
                    <Link href={"/dashboard"}>Go to Dashboard</Link>
                    <UserButton afterSignOutUrl='/'/>
                </>
                : 
                <Link href={"/sign-in"}>Sign In</Link>
            }
        </nav>
    </header>
  )
}

export default Nav