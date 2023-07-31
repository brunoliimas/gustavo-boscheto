import Image from "next/image"
import Link from "next/link"


export default function Header() {
    return (
        <header className="w-full">
            <div className="container">
                <div className="py-10 px-4 xl:px-0 flex items-start justify-between border-b border-b-black font-medium">
                    <div className="flex items-end">
                        <Link
                            href="/">
                            <Image
                                className=""
                                src='/logo-gustavo.svg'
                                width={150}
                                height={91}
                                alt="Logo Gustavo"
                            />
                        </Link>
                    </div>
                    <nav className="flex flex-col gap-2 text-xl transition-all duration-500">
                        <Link
                            className="hover:underline hover:text-slate-700"
                            href="#home">
                            Home
                        </Link>
                        <Link
                            className="hover:underline hover:text-slate-700"
                            href="#about">
                            Sobre
                        </Link>
                        <Link
                            className="hover:underline hover:text-slate-700"
                            href="#projects">
                            Projetos
                        </Link>
                        <Link
                            className="hover:underline hover:text-slate-700"
                            href="#experiences">
                            Experiências
                        </Link>
                    </nav>
                    <div>
                        <Link
                            className="text-2xl"
                            href="#contact">
                            Contato
                        </Link>
                    </div>
                </div>
            </div>

        </header>
    )
}