"use client"

import { NAV_LINKS } from "@/constants"
import Link from "next/link"
import Image from "next/image"
import { motion, useCycle, AnimatePresence, MotionConfig } from "framer-motion"

const Navbar = () => {
    const [mobileMenuOpen, setMobileOpen] = useCycle(false, true)

    return (
        <header className="fixed top-0 right-0 left-0 bg-white z-40 backdrop-filter backdrop-blur-sm bg-opacity-80">
            <nav className="flexBetween mt-2 max-container padding-container relative z-40 md:py-5 uppercase">
                <Link href="/">
                    <p className="font-bold text-lg hover:text-red-800 transition-all">Buba Consultancy</p>
                </Link>
                <ul className="hidden h-full gap-12 md:flex">
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
                <div className="z-40 md:hidden">
                    <motion.button
                        animate={mobileMenuOpen ? "open" : "closed"}
                        onClick={() => setMobileOpen()}
                        className="flex flex-col space-y-1"
                    >
                        <motion.span 
                            variants={{
                                closed: { rotate: 0, y: 0 },
                                open: { rotate: 45, y: 5 }
                            }}
                            className="w-5 h-px bg-red-800">
                        </motion.span>
                        <motion.span 
                            variants={{
                                closed: { opacity: 1 },
                                open: { opacity: 0 }
                            }}
                            className="w-5 h-px bg-red-800">
                        </motion.span>
                        <motion.span 
                            variants={{
                                closed: { rotate: 0, y: 0 },
                                open: { rotate: -45, y: -5 }
                            }}
                            className="w-5 h-px bg-red-800">
                        </motion.span>
                    </motion.button>
                </div>

                <AnimatePresence>
                    {mobileMenuOpen &&
                        <MotionConfig 
                            transition={{
                                type: "spring",
                                bounce: 0.09
                            }}
                        >
                            <motion.div
                                key="mobile-nav"
                                variants={{
                                    open: {
                                        x: "0%",
                                        transition: {
                                            when: "beforeChildren",
                                            type: "spring",
                                            bounce: 0.09
                                        }
                                    },
                                    closed: {
                                        x: "-100%",
                                        transition: {
                                            when: "afterChildren",
                                            type: "spring",
                                            bounce: 0.09
                                        }
                                    }
                                }}
                                initial="closed"
                                animate="open"
                                exit="closed"
                                className="md:hidden fixed inset-0 bg-white backdrop-filter backdrop-blur-md bg-opacity-80 text-red-800 space-y-10 p-6 flex flex-col justify-center"
                            >
                                <motion.div
                                    variants={{
                                        open: {
                                            y: "0%",
                                            opacity: 1
                                        },
                                        closed: {
                                            y: "25%",
                                            opacity: 0
                                        }
                                    }}
                                    className="flex flex-col space-y-5 text-center bold-32"
                                >
                                    {NAV_LINKS.map((link) => (
                                        <Link 
                                            href={link.href}
                                            key={link.key}
                                            className="py-1.5 my-1.5 cursor-pointer"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </MotionConfig>
                    }
                </AnimatePresence>
                
                {/* <div className="lg:hidden">
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
                </div> */}
            </nav>
            {/* <aside className={`fixed w-full ${mobileMenuOpen ? "flex flex-col gap-5 text-center z-30 bg-red-700 text-white" : "hidden"}`}>
                    {NAV_LINKS.map((link) => (
                        <Link 
                            href={link.href} 
                            key={link.key} 
                            className="py-1.5 my-1.5 cursor-pointer hover:font-bold transition-all"
                        >
                            {link.label}
                        </Link>
                    ))}
            </aside> */}
        </header>
  )
}

export default Navbar