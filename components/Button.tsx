"use client";
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'dashed' | 'disabled';
  label: string;
  onClick: () => void; // A basic click handler,
  icon?: string;
  iconAlign?: 'left' | 'right';
}

export default function Button({
  label,
  onClick,
  variant = 'primary',
  icon,
  iconAlign = 'left'
}: ButtonProps) {

  const baseLayout = "w-full py-3 rounded-xl text-sm font-semibold gap-1.5 flex items-center justify-center";

  const variants = {
    primary: "cursor-pointer bg-emerald-600 hover:bg-emerald-500 text-white px-4 shadow-md shadow-emerald-950/40 transition tracking-wide", 
    secondary: "cursor-pointer bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 transition",
    dashed: "cursor-pointer bg-slate-900 hover:bg-slate-800 border border-dashed border-slate-700/60 text-slate-400 transition",
    disabled: "cursor-not-allowed bg-slate-700 text-slate-400 opacity-50",
  };

  const combinedClasses = `${baseLayout} ${variants[variant]}`;


  return (
    <button 
      onClick={onClick}
      disabled={variant === 'disabled'}
      className={combinedClasses}>

      {icon && iconAlign === 'left' && <i className={icon}></i>}  
      {label}
      {icon && iconAlign === 'right' && <i className={icon}></i>}
    
    </button>
  );

}