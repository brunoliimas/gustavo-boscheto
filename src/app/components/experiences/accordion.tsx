'use client'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

interface Work {
    companyName: string;
    occupation: string;
    level: string;
    entry: string;
    exit: string;
    description: string;
    urlImg: string;
    isOpen: boolean;
    toggleAccordion: () => void;
}
const works = [
    {
        companyName: "ARGIS - Arquitetura e Gestão",
        occupation: "Arquiteto",
        level: "Júnior",
        entry: "Setembro de 2022",
        exit: "Atual",
        description: "Escritório especializado em arquitetura focada nos setores de varejo, logística e corporativo. Reconhecida expertise em liderança de projetos abrangentes e desenvolvimento de projetos executivos, colaborando com empresas de renome.",
        urlImg: "argis.png"
    },
    {
        companyName: "Liba Arquitetura",
        occupation: "Arquiteto",
        level: "Júnior",
        entry: "Maio de 2022",
        exit: "Setembro de 2022",
        description: "Experiência abrangente em projetos de diversas escalas, desde empreendimentos imobiliários em parceria com construtoras até a revitalização de espaços internos, como apartamentos studios.",
        urlImg: "liba-arquitetura.png"
    },
    {
        companyName: "Bela Vista Cortinas",
        occupation: "Consultor de Vendas",
        level: "Pleno",
        entry: "Agosto de 2018",
        exit: "Novembro de 2021",
        description: "Ampla experiência em atendimento ao público, realizando levantamentos in loco, elaboração de orçamentos e condução de vendas, incluindo pós-venda. Especializado em vendas de produtos de alta qualidade, como cortinas Hunter Douglas, alcançando um notável marco de mais de R$100.000,00 em vendas durante um único mês.",
        urlImg: "bela-vista-cortinas.png"
    },
]

const AccordionItem = ({ companyName, occupation, level, entry, exit, description, urlImg, isOpen, toggleAccordion }: Work) => {

    return (
        <div className="border-t border-black py-4">
            <button onClick={toggleAccordion} className="w-full text-lg md:text-2xl flex items-center justify-between">
                <div className="flex items-center">
                    <div className="flex items-center">
                        <Image
                            className="border border-black mr-4"
                            src={`/experiences/${urlImg}`}
                            width={50}
                            height={50}
                            alt={companyName}
                        />
                    </div>
                    <div className="flex flex-col md:flex-row items-start text-left">
                        <span className="md:mr-2 font-semibold">
                            {companyName}
                        </span>
                        <span>
                            {occupation} - {level}
                        </span>
                    </div>
                </div>
                {isOpen ? <AiOutlineMinus size={40} /> : <AiOutlinePlus size={40} />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="text-base mt-2 mb-4"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <h3 className="text-xl italic">
                            {entry} - {exit}
                        </h3>
                        <p className="mt-2">{description}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const ExperienceAccordion = () => {
    const [openIndex, setOpenIndex] = useState(-1);

    return (
        <div className="accordion">
            {works.map((work, index) => (
                <AccordionItem
                    key={index}
                    companyName={work.companyName}
                    occupation={work.occupation}
                    level={work.level}
                    entry={work.entry}
                    exit={work.exit}
                    description={work.description}
                    urlImg={work.urlImg}
                    isOpen={index === openIndex}
                    toggleAccordion={() => setOpenIndex(index === openIndex ? -1 : index)}
                />
            ))}
        </div>
    );
};


