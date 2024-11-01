"use client";

import { AlignJustify } from "lucide-react";
import { useEffect, useState } from "react";
const color: string[] = ["#007cfa", "#ffab00", "#f235a6"];
export function ShadowBg({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [show]);

  return (
    <>
      <button
        onClick={() => setShow(!show)}
        className={`flex md:hidden absolute top-4 right-8 border border-[#ffab00] rounded-full p-2 cursor-pointer`}
      >
        <AlignJustify color="white" size={20} />
      </button>
      <div
        onClick={() => setShow(!show)}
        className={`${
          show ? "w-[100vw] min-h-screen" : "!w-0 min-h-0"
        } delay-200 relative  bg-black/65 min-h-screen w-[100vw] overflow-hidden p-0 md:hidden`}
      >
        <div
          className={`animate-in  transition-transform ease-in-out delay-0 ${
            show ? "translate-x-0" : "translate-x-96"
          }`}
        >
          {children}
        </div>
      </div>
    </>
  );
}
