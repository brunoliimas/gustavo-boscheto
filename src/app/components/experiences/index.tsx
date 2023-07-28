'use client'

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Title } from '../ui/title';
import { Carousel } from './carousel';

export default function Experiences() {



    return (
        <section className="w-full my-20 mb-[1000px]">
            <div className="container">
                <Title title="Experiências" />
            </div>
                <Carousel />
        </section>
    );
}
