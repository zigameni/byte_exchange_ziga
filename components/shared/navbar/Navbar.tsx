
import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
            <Link href="/" className="flex items-center gap-1">
                <Image 
                    src="/assets/images/ziga-site-logo.svg" 
                    width={40}
                    height={40}
                    alt="ByteExhange"
                />

                <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
                    Byte <span className="text-primary-500" >Exchange</span>
                </p>
            </Link>
            
            GlobalSearch 

            <div className="flex-between gap-5">
                ThemeComponent

                <SignedIn>
                    <UserButton 
                        afterSignOutUrl="/" 
                        appearance={{
                            elements: {
                                avatarBox: 'h-10 w-10'
                            },
                            variables: {
                                colorPrimary: '#FF7000'
                            }
                        }}
                    />
                </SignedIn>
                
                MobileNav
            </div>


        </nav>
    )
}

export default Navbar;