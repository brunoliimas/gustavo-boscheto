import Image from "next/image"
import { Title } from "../ui/title"

export default function About() {
    return (
        <section id="about" className="w-full my-20">
            <div className="container">
                <Title title="Sobre" />
            </div>
            <div className="container px-0">
                <div className="w-full flex flex-col md:flex-row overflow-x-hidden">
                    <div className="flex flex-col items-center py-6 sm:p-10 border-r md:border-r-0 border-t border-black w-full md:w-1/2 relative">
                        <Image
                            className="w-2/5 md:w-full lg:w-1/2 rounded-full mb-4"
                            src='/about/avatar.jpg'
                            width={100}
                            height={100}
                            alt="Avatar"
                        />
                        <div className="text-center">
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
                            Sou arquiteto e urbanista formado em 2020 pela ULBRA. Com experiência autônoma e consultoria de vendas na área de arquitetura, busquei desafios em São Paulo a partir de 2022. Habilidades avançadas em software como <strong>ArchiCad</strong>, <strong>AutoCad</strong>, <strong>Sketchup</strong> e <strong>Photoshop</strong>, aliadas à paixão por projetos bem executados, refletem meu compromisso, profissionalismo e dedicação.
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