'use client'

import { useState, useEffect } from "react";
import Image from "next/image"
import Link from "next/link"
import { AiOutlineMenu } from "react-icons/ai";
import { Menu } from "../ui/menu/menu";
import { links } from "../ui/menu/links";



export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [menuOpen]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="w-full">
            <div className="container">
                <div className="py-6 px-4 xl:px-0 flex items-center justify-between border-b border-b-black font-medium">
                    <div className="flex items-end">
                        <Link
                            href="/">
                            <Image
                                className=""
                                src='/logo-gustavo_alt.svg'
                                width={100}
                                height={100}
                                alt="Logo Gustavo"
                            />
                        </Link>
                    </div>
                    <nav className="hidden md:flex items-center gap-x-6">
                        {links.map((link, index) => (
                            <Link key={index}
                                className="text-xl capitalize hover:text-slate-600 transition-all duration-300"
                                href={link.href}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                    <button className={`bg-black p-2 text-white md:hidden ${menuOpen ? 'hidden' : 'block'}`} onClick={toggleMenu}>
                        <AiOutlineMenu size={30} />
                    </button>
                    {menuOpen && <Menu onClose={toggleMenu} />}
                    <div className="hidden md:block">
                        <Link
                            className="text-2xl font-bold"
                            href="#contato">
                            Contato
                        </Link>
                    </div>
                </div>

            </div>

        </header>
    )
}