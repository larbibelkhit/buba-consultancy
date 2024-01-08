"use client"

import { NAV_LINKS } from "@/constants"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const Navbar = () => {
    const [mobileMenuOpen, setMobileOpen] = useState(false)

    return (
        <header className="fixed top-0 right-0 left-0 bg-white z-40">
            <nav className="flexBetween max-container padding-container relative z-40 md:py-5 uppercase">
                <Link href="/">
                    <p className="font-bold text-lg hover:text-red-800 transition-all">Buba Consultancy</p>
                </Link>
                <ul className="hidden h-full gap-12 lg:flex">
                    {NAV_LINKS.map((link) => (
                        <Link 
                            href={link.href} 
                            key={link.key} 
                            className="pb-1.5 cursor-pointer transition-all hover:link-shadow hover:text-red-800"
                        >
                            {link.label}
                        </Link>
                    ))}
                </ul>
                
                <div className="lg:hidden">
                    <button className="inline-flex items-center justify-center cursor-pointer" onClick={() => setMobileOpen(!mobileMenuOpen)}>
                    <Image 
                        src={`${mobileMenuOpen ? "close.svg" : "menu.svg"}`} 
                        alt="menu" 
                        width={32} 
                        height={32} 
                        className="inline-block cursor-pointer transition-all duration-250"
                        style={{
                            transform: mobileMenuOpen ? "rotate(90deg)": "none"
                        }}
                    />
                    </button>
                </div>
            </nav>
            <aside className={`fixed w-full ${mobileMenuOpen ? "flex flex-col gap-5 text-center z-30 bg-red-700 text-white" : "hidden"}`}>
                    {NAV_LINKS.map((link) => (
                        <Link 
                            href={link.href} 
                            key={link.key} 
                            className="py-1.5 my-1.5 cursor-pointer hover:font-bold transition-all"
                        >
                            {link.label}
                        </Link>
                    ))}
            </aside>
        </header>
  )
}

export default Navbar