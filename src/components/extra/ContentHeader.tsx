import React from "react";
import { Icons } from "../shared/Icons";
import { Title } from "../shared";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export function ContentHeader() {
  return (
    <div
      className={`relative flex flex-col justify-center items-center bg-bg-image-header bg-center bg-no-repeat bg-cover h-[70vh]
        before:content-[''] before:absolute before:bg-[#001892] before:h-full before:w-full before:opacity-75
      `}
    >
      <div className="absolute -bottom-1 left-0 w-full -rotate-180 overflow-hidden">
        <Icons.svg_header className="relative fill-white z-10 pointer-events-none" />
      </div>
      <div className="flex flex-col justify-center items-center gap-2 relative z-30 ">
        {/*  */}
        <p className="bg-gray-200 rounded-md px-2 py-1 text-sm">
          شسشتوی حرفه ای مبلمان در اندیشه
        </p>
        {/* header */}
        <div>
          <Title
            text="مبل شویی اندیشه"
            size="xl"
            className="text-white font-bold"
          />
        </div>
        {/* content */}
        <p className="text-white">
          به سایت خدماتی مبل شویی اندیشه خوش آمدید.خدمات ما در زیر درج شده است.
        </p>
        {/* button */}
        <div className="flex gap-x-7">
          <Link
            href={"/"}
            className={`${buttonVariants({
              variant: "outline",
              size: "default",
            })}`}
          >
            سفارش تلفنی
          </Link>
          <Link
            href={"/"}
            className={`${buttonVariants({
              variant: "outline",
              size: "default",
            })}`}
          >
            سفارش آنلاین
          </Link>
        </div>
      </div>
    </div>
  );
}
