import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { links } from "./links";


// const links = ["features", "pricing", "contact"];

type MenuProps = {
    onClose: () => void;
};

export const Menu = ({ onClose }: MenuProps) => {
    return (
        <div className="fixed z-50 top-0 left-0 w-full h-screen p-8 flex flex-col items-center justify-start bg-neutral-950 text-white opacity-[.98]">
            <ul className="pt-10 w-full flex flex-col items-center justify-center">
                {links.map((link, index) => (
                    <li key={index} className="flex items-center py-4 px-2 border-b border-b-neutral-800 w-full">
                        <Link
                            className="text-white capitalize text-lg transition-all duration-300"
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
