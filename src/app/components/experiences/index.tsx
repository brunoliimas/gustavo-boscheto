'use client'

import { Title } from '../ui/title';
import { Carousel } from './carousel';

export default function Experiences() {



    return (
        <section id="experiences" className="w-full my-20">
            <div className="container">
                <Title title="Experiências" />
            </div>
            <Carousel />
        </section>
    );
}
