"use client"

import Link from "next/link";

const buttonStyle =
    "px-4 py-1 bg-green-800/5 text-center hover:bg-green-700/15 hover:-translate-y-1 rounded-full shadow-md shadow-green-900 hover:shadow-[#62e394] transition duration-300";

type HeaderButtonProps = {
    href: string;
    insideText?: string;
    icon?: React.ReactNode;
    color?: string;
    mobile?: boolean;
}
type HeaderScrollButtonProps = {
    idScroll: string;
    insideText?: string;
    icon?: React.ReactNode;
    color?: string;
    mobile?: boolean;
}

const handleScrollTo = (id:string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


const HeaderButton: React.FC<HeaderButtonProps> = ({ href, insideText, icon, mobile }) => {
    return(
        <Link 
            href={href}
            className={`${
                mobile 
                    ? "justify-center py-3 text-center" 
                    : "px-3 py-2"
            } ${buttonStyle}`}
        >
            <div className="text-2xl">
            {icon}
            </div>
            {insideText}
        </Link>
    )
}

const HeaderIconButton: React.FC<HeaderButtonProps> = ({ href, icon, color, mobile }) => {
    return(
        <Link 
            href={href} 
            className={`${
                mobile ? "text-2xl mx-auto" : "text-3xl"
            } hover:transition-all hover:-translate-y-1 active:scale-95 active:transition-transform active:-translate-y-0.5`} 
            style={{ color: `rgb(${color})` }}
        >
            {icon}
        </Link>
    )
}

const HeaderScrollButton: React.FC<HeaderScrollButtonProps> = ({idScroll, icon, color, insideText, mobile}) => {
    return(
        <button
            onClick={() => handleScrollTo(idScroll)}
            className={`${
                mobile 
                    ? "justify-center py-3 text-center" 
                    : "px-3 py-2"
            } ${buttonStyle}`}
            style={{ color: `rgb(${color})` }}
        >
            <div className="text-2xl">
            {icon}
            </div>
            {insideText}
        </button>
    )
}

export { HeaderButton, HeaderIconButton, HeaderScrollButton };