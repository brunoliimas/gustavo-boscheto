'use client'
import { Title } from '../ui/title';
import { ExperienceAccordion } from './accordion';

export default function Experiences() {



    return (
        <section id="experiences" className="w-full my-20">
            <div className="container">
                <Title title="Experiências" />
                <ExperienceAccordion />
            </div>
        </section>
    );
}
