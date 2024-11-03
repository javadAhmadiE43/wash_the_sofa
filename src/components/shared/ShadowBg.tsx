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
      document.body.style.overflow = "initial";
    }
  }, [show]);

  const babbling = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setShow(!show);
  };

  return (
    <div className="">
      <button
        onClick={(e) => setShow(!show)}
        className={`flex md:hidden absolute top-4 right-8 border border-[#838B95] rounded-full p-2 cursor-pointer`}
      >
        <AlignJustify size={20} className="text-[#838B95]" />
      </button>
      <div
        onClick={(e) => babbling(e)}
        className={`absolute transition-[width] duration-500 ease-in-out delay-100  h-screen z-30 ${
          show ? "w-screen" : "!min-w-0 w-0"
        } left-0 right-0 top-0  bg-[#4977E5]/65   overflow-hidden md:hidden`}
      ></div>
      <div
        className={`transition-[width] duration-500 ease-in-out absolute top-0 right-0 h-screen z-50 ${
          show ? "w-[47vw]" : "!min-w-0 w-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export function FixedBg({ children }: { children: React.ReactNode }) {
  const [bgNavbar, setBgNavbar] = useState<boolean>(false);
  function scrollNav(e: Event) {
    if (window.scrollY > 100) {
      setBgNavbar(true);
    } else {
      setBgNavbar(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollNav);
    return () => window.removeEventListener("scroll", scrollNav);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 ${
        bgNavbar ? "bg-[#0384E7]/75 text-white" : "bg-white"
      }`}
    >
      {children}
    </div>
  );
}
