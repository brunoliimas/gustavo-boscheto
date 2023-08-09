import Image from "next/image"


export default function Masthead() {
    return (
        <section className="w-full py-20">
            <div className="container">
                <div className="relative w-full flex flex-col px-4 lg:px-0">
                    <h1 className="py-20 px-4">
                        <span className="block font-thin text-5xl sm:text-7xl md:text-9xl">Gustavo</span>
                        <span className="block font-medium text-5xl sm:text-7xl md:text-9xl ml-10 md:ml-20">Boscheto</span>
                        <span className="block font-thin text-3xl md:text-6xl">Arquiteto</span>
                        <span className="block font-medium text-3xl md:text-6xl ml-20 md:ml-40">&#174;2023</span>
                        <div className="tex-base w-full mt-8 mb-16 md:text-2xl md:w-1/2 bg-[#faf5f0] md:bg-inherit bg-opacity-80">
                            <h2>Descubra a arte de projetar explorando espaços e criando sonhos</h2>
                        </div>
                    </h1>
                    <div className="absolute -bottom-10 right-0 -z-10">
                        {/* <Image
                            src='/projects/praca.png'
                            width={654}
                            height={354}
                            alt="Hero 01"
                        /> */}
                        <Image
                            className=""
                            src='/masthead/bg-masthead.svg'
                            width={1000}
                            height={1000}
                            alt="Hero 01"
                        />
                        <small className="absolute text-[8px] sm:text-sm right-0 bottom-0">Imagem de archjoe no Freepik</small>
                    </div>
                </div>
            </div>
        </section>
    )
}