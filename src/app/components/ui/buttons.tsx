// TabButton.tsx
import Link from "next/link";
import React from "react";

interface TabButtonProps {
    active: boolean;
    title: string;
    onClick: () => void;
}
interface ButtonProps {
    name: string
    href: string
}

export const TabButton: React.FC<TabButtonProps> = ({ active, title, onClick }) => {
    return (
        <button
            className={`${active ? "active bg-neutral-900 text-white font-medium" : ""
                } border cursor-pointer border-neutral-900 rounded-full py-4 px-8 transition-all duration-500 hover:bg-neutral-600 hover:text-white`}
            onClick={onClick}
        >
            {title}
        </button>
    );
};

export const Button = ({ href, name }: ButtonProps) => {
    return (
        <Link href={href}>
            <button
                className=" bg-neutral-900 text-white border cursor-pointer rounded-full py-4 px-8 transition-all duration-500 hover:border-neutral-900 hover:bg-neutral-600">
                {name}
            </button>
        </Link>
    )
}