'use client'
import Image from "next/image";
import { useState } from "react";
import { TabButton, Button } from "../ui/buttons";


const tabsContents = [
    {
        id: 1,
        title: "Projeto 01",
        text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control e your favourite sites.",
        URLImage: "/projects/project-01.jpg",
        hrefLink: "/"
    },
    {
        id: 2,
        title: "Projeto 02",
        text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
        URLImage: "/projects/project-02.jpg",
        hrefLink: "/"
    },
    {
        id: 3,
        title: "Projeto 03",
        text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
        URLImage: "/projects/project-03.jpg",
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
                                <p className="text-base">
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