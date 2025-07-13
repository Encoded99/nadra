import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

export function DashedCircle({ children, className = "" }: Props) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 300 300" className="w-full h-full">
        <circle
          cx="150"
          cy="150"
          r="120"
          fill="none"
          stroke="#FF8DA1"
          strokeWidth="10"
          strokeDasharray="20 15"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
