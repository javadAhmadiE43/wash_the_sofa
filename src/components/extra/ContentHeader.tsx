import React from "react";
import { Container, Title } from "../shared";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import Image from "next/image";

export function ContentHeader() {
  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-center items-center gap-x-7 md:h-[480px] mt-5 md:mt-[100px]">
        <div className="flex flex-col justify-center items-center gap-2 px-4 relative z-20 ">
          <p className=" px-2 py-1 text-sm">شسشتوی حرفه ای مبلمان در اندیشه</p>
          {/* header */}
          <div>
            <Title
              text="مبل شویی اندیشه"
              size="xl"
              className=" font-bold text-[#4977E5] "
            />
          </div>
          {/* content */}
          <p className="hidden md:block text-xs text-justify">
            به سایت خدماتی مبل شویی اندیشه خوش آمدید.خدمات ما در زیر درج شده
            است.
          </p>
          {/* button */}
          <div className="flex gap-x-4 ">
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
        <div>
          <Image
            src="/images/bannerSlider.jpg"
            alt=""
            width={400}
            height={400}
            className="w-full h-full"
          />
        </div>
      </div>
    </Container>
  );
}
