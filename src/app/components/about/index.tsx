import Image from "next/image"
import { Title } from "../ui/title"

export default function About() {
    return (
        <section id="about" className="w-full my-20">
            <div className="container">
                <Title title="Sobre" />
                <div className="w-full flex flex-col md:flex-row overflow-x-hidden">
                    <div className="flex flex-col lg:flex-row items-center py-6 sm:p-10 border-r border-t border-black w-full md:w-1/2 relative">
                        <Image
                            className="w-2/5 lg:w-1/5 rounded-full mb-4 lg:m-0"
                            src='/about/avatar.jpg'
                            width={100}
                            height={100}
                            alt="Avatar"
                        />
                        <div className="ml-6">
                            <h3 className="text-2xl">
                                Gustavo <strong>Boscheto</strong>
                            </h3>
                            <span className="text-xl leading-4 text-zinc-500">Arquiteto e Urbanista</span>
                        </div>
                        <Image
                            className="absolute top-[-25px] right-[-25px]"
                            src="/about/star.svg"
                            width={50}
                            height={50}
                            alt="star"
                        />
                    </div>
                    <div className="p-10 border-l border-t border-black relative">
                        <p className="text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <Image
                            className="absolute top-[-25px] left-[-25px] md:hidden"
                            src="/about/star.svg"
                            width={50}
                            height={50}
                            alt="star"
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}