import Image from "next/image"


export default function Masthead() {
    return (
        <section className="w-full h-screen">
            <div className="container w-full h-full flex items-center">
                <div className="w-full pt-32 pb-16 relative">
                    <h1 className="text-8xl">
                        <span className="block font-thin">Gustavo</span>
                        <span className="block font-medium ml-20">Boscheto</span>
                        <span className="block font-thin">Arquiteto</span>
                        <span className="block font-medium">&#174;2023</span>
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
                    <div className="text-2xl w-1/2 mt-10">
                        <h2>Descubra a arte de projetar explorando espaços e criando sonhos</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}