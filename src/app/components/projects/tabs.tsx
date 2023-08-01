'use client'
import Image from "next/image";
import { useState } from "react";
import { TabButton, Button } from "../ui/buttons";


const tabsContents = [
    {
        id: 1,
        title: "Coworking + Centro Gastronômico",
        text: `A região do 4° distrito em Porto Alegre-RS, conhecida como a "zona velha", tem imóveis em situação precária e abandonados. O objetivo é requalificar tipologias industriais remanescentes e revitalizar a área, utilizando um antigo galpão dos Correios como um novo ponto gastronômico na cidade. O projeto busca criar um ponto de referência tecnológica e gastronômica no bairro São Geraldo, com uma arquitetura contemporânea e sustentável. O objetivo é trazer leveza e movimento para a região, criando novos espaços urbanos de qualidade e promovendo encontros para a comunidade em geral.`,
        URLImage: "/projects/coworking.png",
        hrefLink: "/"
    },
    {
        id: 2,
        title: "Mercado Público De Canoas",
        text: `O Mercado Público localizado no município de Canoas, RS, com uma arquitetura contemporânea que chama a atenção. Sendo próximo à capital do estado, o mercado atrai investimentos no setor de infraestrutura e comércio, com grande potencial a ser explorado. A estrutura é composta por um grande prisma, com pilares em formato de "X" em madeira laminada colada e fechamentos em vidro, contrastando com um volume bruto de concreto armado que abriga os serviços do mercado.`,
        URLImage: "/projects/mercado-publico-canoas.png",
        hrefLink: "/"
    },
    {
        id: 3,
        title: "A Praça",
        text: "   Canoas, e principalmente a região central da cidade tem poucos locais de convivência, praças públicas. Pensando em resolver essa problemática, foi projetado uma espaço multiuso, aberto, que pode ser usado para feiras e eventos itinerantes.",
        URLImage: "/projects/praca.png",
        hrefLink: "/"
    }
]

export const Tabs = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber: number) => {
        setActiveTab(tabNumber);
    };

    return (
        <>
            <div className="w-full flex flex-col items-start justify-center px-4 lg:px-0">
                {tabsContents.map((tab) => (
                    <div
                        key={tab.id}
                        className={`container w-full relative ${activeTab === tab.id ? "" : "hidden"}`}>
                        <div className="w-full max-h-[700px] overflow-hidden flex items-center justify-center rounded-3xl border border-black">
                            <Image
                                className="w-full object-cover"
                                src={tab.URLImage}
                                width={400}
                                height={266}
                                alt="Imagem hero"
                            />
                        </div>
                        <div className="w-full flex justify-center items-center md:grid grid-cols-none md:grid-cols-2 md:gap-4 md:absolute md:-bottom-8 xl:-bottom-10 md:right-10">
                            <div className="flex flex-col md:col-start-2 bg-white p-10 gap-4 border border-black rounded-3xl">
                                <h1 className="text-2xl md:text-4xl font-bold">
                                    {tab.title}
                                </h1>
                                <p className="text-base truncate">
                                    {tab.text}
                                </p>
                                <div className="flex items-center justify-start space-x-4">
                                    <Button
                                        name="Ver mais"
                                        href={tab.hrefLink}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="container flex flex-wrap justify-center lg:justify-start md:mt-8 items-center gap-4 py-4">
                    {tabsContents.map((tab) => (
                        <TabButton
                            key={tab.id}
                            active={activeTab === tab.id}
                            title={tab.title}
                            onClick={() => handleTabClick(tab.id)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};