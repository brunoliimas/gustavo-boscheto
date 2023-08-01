'use client'

import Image from "next/image"

import { useEffect, useRef } from "react";

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export const Carousel = () => {

    const experiencesRef = useRef(null);
    const yearRef = useRef(null);
    const jobRef = useRef(null);


    useEffect(() => {
        const scrollTriggerOptions = {
            trigger: experiencesRef.current,
            start: "-500px",
        };
        gsap.to(yearRef.current, {
            scrollTrigger: scrollTriggerOptions,
            xPercent: -58,
        });
        gsap.to(jobRef.current, {
            scrollTrigger: scrollTriggerOptions,
            yPercent: -72,
        });
    }, []);




    return (
        <div className="overflow-x-hidden">
            <div ref={experiencesRef} className="w-[1000px] lg:w-full flex items-center overflow-hidden border-y border-black">
                <div ref={yearRef} className="py-8 w-full grid grid-cols-3 text-center">
                    <div>
                        <h3 className="text-8xl font-bold">2020</h3>
                    </div>
                    <div ref={yearRef}>
                        <h3 className="text-8xl font-bold">2022</h3>
                    </div>
                    <div ref={yearRef}>
                        <h3 className="text-8xl font-bold">2023</h3>
                    </div>
                </div>
            </div>
            <div className="container overflow-y-hidden h-[500px] md:h-[210px]">
                <div ref={jobRef} >
                    <div className="p-6 flex flex-col gap-10 lg:flex-row border-b border-black">
                        <div className="flex items-center lg:flex-col">
                            <Image
                                src='/about/star.svg'
                                width={100}
                                height={100}
                                alt="Empresa"
                            />
                            <div className="ml-6 lg:ml-0">
                                <h3 className="text-2xl">
                                    Gustavo <strong>Boscheto</strong>
                                </h3>
                                <span className="text-xl leading-4 text-zinc-500">Arquiteto e Urbanista</span>
                            </div>
                        </div>
                        <div className="mt-8">
                            <p className="text-lg">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <div className="mt-8">
                                skills
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col border-b border-black">
                        <div className="p-6 flex items-center">
                            <Image
                                src='/about/avatar.jpg'
                                width={100}
                                height={100}
                                alt="Empresa"
                            />
                            <div className="ml-6">
                                <h3 className="text-2xl">
                                    Gustavo <strong>Boscheto</strong>
                                </h3>
                                <span className="text-xl leading-4 text-zinc-500">Arquiteto e Urbanista</span>
                            </div>
                        </div>
                        <div className="p-6">
                            <p className="text-lg">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col border-b border-black">
                        <div className="p-6 flex items-center">
                            <Image
                                src='/about/avatar.jpg'
                                width={100}
                                height={100}
                                alt="Empresa"
                            />
                            <div className="ml-6">
                                <h3 className="text-2xl">
                                    Gustavo <strong>Boscheto</strong>
                                </h3>
                                <span className="text-xl leading-4 text-zinc-500">Arquiteto e Urbanista</span>
                            </div>
                        </div>
                        <div className="p-6">
                            <p className="text-lg">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}