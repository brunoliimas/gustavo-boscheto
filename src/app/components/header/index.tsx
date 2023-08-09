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
            <div className="container px-0">
                <div className="px-4 xl:px-0 flex items-center justify-between border-b border-b-black font-medium overflow-hidden">
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
                                className="text-xl capitalize hover:text-neutral-600 hover:underline transition-all duration-300"
                                href={link.href}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                    {menuOpen && <Menu onClose={toggleMenu} />}
                    <div className=" relative border-l border-black pl-8 md:px-8 py-10">
                        <Image
                            className="absolute -bottom-[25px] -left-[25px]"
                            src="/about/star.svg"
                            width={50}
                            height={50}
                            alt="star"
                        />
                        <button className={`bg-black p-2 text-white md:hidden ${menuOpen ? 'hidden' : 'block'}`} onClick={toggleMenu}>
                            <AiOutlineMenu size={30} />
                        </button>
                        <Link
                            className="text-2xl font-bold hidden md:block hover:text-neutral-600 hover:underline transition-all duration-300"
                            href="#contato">
                            Contato
                        </Link>
                    </div>
                </div>

            </div>

        </header>
    )
}