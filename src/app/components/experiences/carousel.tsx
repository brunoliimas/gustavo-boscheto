'use client'

import Image from "next/image"

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../../../../public/gsap";

gsap.registerPlugin(ScrollTrigger);


export const Carousel = () => {

    const experienceRef = useRef(null);
    const yearRef = useRef(null);
    const titleRef = useRef(null);
    const strokeRef = useRef(null);
    const titleParallaxRef = useRef(null);
    const marqRef = useRef(null);
    const wrappRef = useRef(null);
    const starRefs = [useRef(null), useRef(null), useRef(null)];

    useEffect(() => {
        const tlExperience = gsap.timeline();
        tlExperience
            .from(yearRef.current, {
                duration: 2,
                scale: 1.5,
                ease: "ease",
            }, "-=1.5");
    }, []);

    useEffect(() => {
        const scrollTriggerOptions = {
            trigger: experienceRef.current,
            start: "-500px",
            scrub: 1.9,
        };
        gsap.to(yearRef.current, {
            scrollTrigger: scrollTriggerOptions,
            xPercent: -20,
        });
    }, []);




    return (
        <>
            <div ref={experienceRef} className="opacity-30 bg-red-500 w-full flex items-center overflow-hidden">
                <div ref={yearRef} className="bg-blue-400 w-full grid grid-cols-3 text-center">
                    <div>
                        <h3 className="text-8xl font-bold">2020</h3>
                    </div>
                    <div ref={yearRef}>
                        <h3 className="text-8xl font-bold">2020</h3>
                    </div>
                    <div ref={yearRef}>
                        <h3 className="text-8xl font-bold">2020</h3>
                    </div>
                </div>
            </div>
            <div className="container overflow-y-hidden h-[210px]">
                <div className="flex">
                    <div>
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
                    <div className="p-10">
                        <p className="text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div>
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
                    <div className="p-10">
                        <p className="text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div>
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
                    <div className="p-10">
                        <p className="text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}