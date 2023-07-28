'use client'
import Image from "next/image";
import { useState } from "react";


const tabsContents = [
    {
        id: 1,
        title: "Projeto 01",
        text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
        URLImage: "/projects/project-01.jpg",
        HrefLink: "/"
    },
    {
        id: 2,
        title: "Projeto 02",
        text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
        URLImage: "/projects/project-02.jpg",
        HrefLink: "/"
    },
    {
        id: 3,
        title: "Projeto 03",
        text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
        URLImage: "/projects/project-03.jpg",
        HrefLink: "/"
    }
]

export const Tabs = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber: number) => {
        setActiveTab(tabNumber);
    };

    return (
        <>

            <div className="w-full flex flex-col items-start justify-center">
                {tabsContents.map((tab) => (
                    <div key={tab.id} className={`container w-full relative ${activeTab === tab.id ? "" : "hidden"}`}>
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
                                <h1 className="text-4xl font-bold">Título</h1>
                                <p className="text-base">
                                    {tab.text}
                                </p>
                                <div className="flex items-center justify-start space-x-4">
                                    <button className="bg-black text-white py-4 px-8 rounded-full">Botao</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="container flex flex-wrap justify-center lg:justify-start md:mt-8 items-center gap-4 py-4">
                    {tabsContents.map((tab) => (
                        <button
                            key={tab.id}
                            className={`${activeTab === tab.id ? "active bg-black text-white font-medium" : ""
                                }border cursor-pointer border-black rounded-full py-4 px-8 transition-all duration-500 hover:bg-neutral-600 hover:text-white`}
                            onClick={() => handleTabClick(tab.id)}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
};