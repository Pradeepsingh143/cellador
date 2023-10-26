import Link from "next/link";
import React from "react";

export default function Button({text, link="#", className, ariaLabel}) {
  return (
    <Link href={link}>  
    <button className={`bg-primary tracking-wider capitalize font-medium z-10 w-[177px] h-[54px] flex justify-center items-center rounded-[10px] text-white hover:brightness-125 ${className}`} aria-label={ariaLabel}>
      {text}
    </button>
    </Link>
  );
}
