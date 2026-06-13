import { ReactNode } from "react";

interface ProgressBarProps {
  totalAmount: number;
  savedAmount: number;
  title: string;
  icon?: ReactNode;
  currency?: string;
  gradientIndex?: number;
}

const PROGRESS_GRADIENTS = [
  "from-amber-500 to-emerald-400",   // Index 0
  "from-purple-500 to-emerald-400",  // Index 1
  "from-sky-500 to-emerald-400",     // Index 2
  "from-fuchsia-500 to-cyan-400",    // Index 3
  "from-orange-500 to-pink-400",     // Index 4
  "from-yellow-500 to-fuchsia-400",  // Index 5
  "from-blue-600 to-teal-400",       // Index 6
  "from-cyan-500 to-blue-400",       // Index 7
  "from-red-500 to-amber-400",       // Index 8
  "from-indigo-500 to-purple-400",   // Index 9
  "from-blue-600 to-indigo-400",     // Index 10
  "from-pink-500 to-purple-400",     // Index 11
  "from-green-500 to-lime-400",      // Index 12
  "from-lime-500 to-green-400",      // Index 13
  "from-emerald-500 to-teal-400",    // Index 14
  "from-fuchsia-500 to-pink-400",    // Index 15
];

export default function ProgressBar({ totalAmount, savedAmount, title, currency = "HUF", icon, gradientIndex=0 }: ProgressBarProps) {
  const progressPercentage = (savedAmount / totalAmount) * 100;
  const remainingAmount = totalAmount - savedAmount < 0 ? 0 : totalAmount - savedAmount;

  return (
    <div className="bg-slate-800/40 border border-slate-800 rounded-xl p-4 w-80">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-white text-sm">
          <i className="mr-1">{icon}</i>
          {title}
          <span className="text-xs text-slate-400 mt-0.5 block">{savedAmount.toLocaleString()} / {totalAmount.toLocaleString()} {currency}</span>
        </h3>
        <span className="text-xs font-semibold text-emerald-400">Needs: {remainingAmount.toLocaleString()} {currency}</span>
      </div>
      <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden mt-3">
        <div className={`bg-linear-to-r ${PROGRESS_GRADIENTS[gradientIndex]} h-full rounded-full`} style={{ width: `${progressPercentage}%` }}></div>
      </div>
    </div>
  );
}