import Image from "next/image"
import { Title } from "../ui/title"
import Link from "next/link"
import { MdEmail } from 'react-icons/md'
import { FaWhatsappSquare, FaLinkedin, FaInstagramSquare, FaBehanceSquare } from 'react-icons/fa'


export default function Contact() {
    return (
        <section id="contact" className="w-full my-20">
            <div className="container">
                <Title title="Contato" />
                <div className="px-4 lg:px-0">
                    <div className="p-6 grid grid-cols-1 gap-8 md:grid-cols-3 border border-black rounded-3xl">
                        <div className="flex justify-center md:justify-start">
                            <Link href="/">
                                <Image
                                    src="/logo-gustavo_alt.svg"
                                    alt="Gustavo Bosqueto"
                                    width={100}
                                    height={50}
                                />
                            </Link>
                        </div>
                        <div className="">
                            Menu
                        </div>
                        <div className="">
                            <h3 className="font-medium text-lg">Contato</h3>
                            <div className="flex flex-wrap items-center gap-4 pt-4">
                                <a className="hover:text-neutral-700" href="http://" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin size={30} />
                                </a>
                                <a className="hover:text-neutral-700" href="http://" target="_blank" rel="noopener noreferrer">
                                    <FaWhatsappSquare size={30} />
                                </a>
                                <a className="hover:text-neutral-700" href="http://" target="_blank" rel="noopener noreferrer">
                                    <FaInstagramSquare size={30} />
                                </a>
                                <a className="hover:text-neutral-700" href="http://" target="_blank" rel="noopener noreferrer">
                                    <FaBehanceSquare size={30} />
                                </a>
                                <a className="hover:text-neutral-700" href="http://" target="_blank" rel="noopener noreferrer">
                                    <MdEmail size={30} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}