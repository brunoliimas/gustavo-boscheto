'use client'
import { useEffect, useState, useRef } from 'react';
import { BiSolidUpArrow } from 'react-icons/bi';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollToTopButtonProps {
    containerRef: React.MutableRefObject<any>; // Substitua 'any' pelo tipo correto do seu container
}

export const ScrollToTopButton = ({ containerRef }: ScrollToTopButtonProps) => {
    const scrollToTopRef = useRef(null)

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    useEffect(() => {
        const scrollTriggerOptions = {
            trigger: containerRef.current,
            start: "top top",
            scrub: 1.4,
        };
        gsap.from(scrollToTopRef.current, {
            scrollTrigger: scrollTriggerOptions,
            duration: .1,
            yPercent: 150,
            ease: "power2.out",
        });
    }, []);
    return (
        <button
            ref={scrollToTopRef}
            className={`${isVisible ? 'block' : 'hidden'
                } fixed z-50 bottom-6 right-6 p-4 bg-neutral-800 text-white shadow-xl`}
            onClick={scrollToTop}
        >
            <BiSolidUpArrow size={30} />
        </button>
    );
};

