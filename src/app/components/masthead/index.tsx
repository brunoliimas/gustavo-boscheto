import Image from "next/image"


export default function Masthead() {
    return (
        <section className="w-full my-40">
            <div className="container w-full h-full flex items-center">
                <div className="w-full relative px-4 lg:px-0">
                    <h1 className="">
                        <span className="block font-thin text-6xl md:text-9xl">Gustavo</span>
                        <span className="block font-medium text-6xl md:text-9xl ml-20">Boscheto</span>
                        <span className="block font-thin text-3xl md:text-6xl">Arquiteto</span>
                        <span className="block font-medium text-3xl md:text-6xl ml-40">&#174;2023</span>
                    </h1>
                    <div className="absolute top-0 left-0 -z-10 w-full h-full flex items-center justify-end">
                        <Image
                            src='/masthead/hero-01.jpg'
                            width={112}
                            height={520}
                            alt="Hero 01"
                        />
                        <Image
                            className="ml-8"
                            src='/masthead/hero-02.jpg'
                            width={205}
                            height={632}
                            alt="Hero 01"
                        />
                    </div>
                    <div className="tex-base w-full mt-10 md:text-2xl md:w-1/2">
                        <h2>Descubra a arte de projetar explorando espaços e criando sonhos</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}