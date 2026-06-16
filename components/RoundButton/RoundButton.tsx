"use client";
import { ReactNode } from "react";

interface RoundButtonProps {
    onClick: () => void;
    variant: 'primary' | 'secondary';
    icon?: ReactNode;
}

export default function RoundButton({
    onClick,
    variant,
    icon
}: RoundButtonProps) {

    const baseLayout = "w-10 h-10 rounded-full flex items-center justify-center p-3";
    const variants = {
        primary: "bg-slate-700 hover:bg-slate-500 transition",
        secondary: "border-2 border-slate-700/60 transition hover:bg-slate-700",
    };
    const combinedClasses = `${baseLayout} ${variants[variant]}`;

    return (
        <button className={combinedClasses} onClick={onClick}>
            {icon}
        </button>
    );

}