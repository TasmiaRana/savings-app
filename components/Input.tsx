"use client";
import { ReactNode } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  setText: (value: string) => void;
}

export default function Input({ placeholder = "Enter Amount", leftIcon, rightIcon, setText, ...props }: InputProps) {

  return (

    <div className="flex flex-row items-center px-5 py-4 gap-3 bg-slate-950 border border-slate-800 text-white rounded-xl outline-none transition-all duration-300 focus-within:border-emerald-500 focus-within:ring-4 focus-within:ring-emerald-500/20">
      {leftIcon && <div className="flex items-center text-gray-400 shrink-0">{leftIcon}</div>}

      <input
        className="w-full bg-transparent placeholder-gray-500 focus:outline-none text-center text-2xl font-mono font-extrabold [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        type="number"
        placeholder={placeholder}
        onChange={(e) => setText(e.target.value)}
        {...props}
      />

      {rightIcon && <div className="flex items-center text-gray-400 shrink-0">{rightIcon}</div>}
    </div>
  );
}