import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { links } from "./links";
import Image from "next/image";


// const links = ["features", "pricing", "contact"];

type MenuProps = {
    onClose: () => void;
};

export const Menu = ({ onClose }: MenuProps) => {
    return (
        <div className="fixed z-50 top-0 left-0 w-full h-screen p-8 flex flex-col items-center justify-start bg-neutral-950 text-white opacity-[.98]">
            <div className="pt-10 mb-4">
                <Link
                    href="/">
                    <Image
                        className=""
                        src='/logo-gustavo_alt_2-white.svg'
                        width={180}
                        height={73.3}
                        alt="Logo Gustavo"
                    />
                </Link>
            </div>
            <ul className="w-full flex flex-col">
                {links.map((link, index) => (
                    <li key={index} className="py-4 px-2 border-b border-b-neutral-800">
                        <Link
                            className="text-white font-light capitalize text-lg transition-all duration-300"
                            href={link.href}
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}

            </ul>
            <button className="absolute top-8 right-8 text-white" onClick={onClose}>
                <IoClose size={50} />
            </button>
        </div>
    );
};
