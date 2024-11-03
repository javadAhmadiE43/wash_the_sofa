import Image from "next/image";
import React from "react";
import { Container, Title } from "../shared";
const image = "/images/banner-4.png";
const content = `به وب‌سایت ما خوش آمدید! ما یک تیم متخصص و با تجربه در حوزه مبل‌شویی هستیم که با هدف ارائه بهترین خدمات به مشتریان عزیز شروع به کار کردیم.`;
const content1 = `تیم ما از تکنیک‌های نوین و مواد شوینده با کیفیت بالا استفاده می‌کند تا بتواند مبلمان شما را به بهترین شکل ممکن تمیز کرده و طول عمر آن‌ها را افزایش دهد. ما به‌عنوان یک کسب‌وکار محلی، به جلب رضایت مشتریان و ارائه خدمات حرفه‌ای و مطمئن متعهدیم.`;
const content2 = `از اینکه ما را برای مبل‌شویی انتخاب می‌کنید سپاسگزاریم و امیدواریم بتوانیم تجربه‌ای بی‌نظیر را برای شما رقم بزنیم.`;
export default function Sectionone() {
  return (
    <Container className="mt-16">
      <section className=" flex  flex-col-reverse gap-y-7 md:gap-0 md:flex-row  justify-center items-center md:items-start">
        {/* content */}
        <div className="overflow-hidden flex-1">
          <div className="mb-5">
            <div className="flex items-center justify-normal">
              <Title
                text="مبل شویی اندیشه"
                size="sm"
                className="font-bold whitespace-nowrap w-auto"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 text-[#838B95]">
            <div>
              <p>{content}</p>
            </div>
            <div>
              <p>{content1}</p>
            </div>
            <div>
              <p>{content2}</p>
            </div>
          </div>
        </div>

        {/* image */}
        <div className="flex-1 flex items-center justify-center relative">
          <div className="bg-liner left-28 w-80 h-96  z-20 "></div>
          <Image
            src={image}
            width={400}
            height={400}
            className="relative z-30"
            alt="dec"
          />
        </div>
      </section>
    </Container>
  );
}
