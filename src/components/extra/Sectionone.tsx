import Image from "next/image";
import React from "react";
import { Container, Title } from "../shared";
import { Separator } from "../ui/separator";
const image = "/images/banner-3.png";
const content = `به وب‌سایت ما خوش آمدید! ما یک تیم متخصص و با تجربه در حوزه مبل‌شویی هستیم که با هدف ارائه بهترین خدمات به مشتریان عزیز شروع به کار کردیم.`;
const content1 = `تیم ما از تکنیک‌های نوین و مواد شوینده با کیفیت بالا استفاده می‌کند تا بتواند مبلمان شما را به بهترین شکل ممکن تمیز کرده و طول عمر آن‌ها را افزایش دهد. ما به‌عنوان یک کسب‌وکار محلی، به جلب رضایت مشتریان و ارائه خدمات حرفه‌ای و مطمئن متعهدیم.`;
const content2 = `از اینکه ما را برای مبل‌شویی انتخاب می‌کنید سپاسگزاریم و امیدواریم بتوانیم تجربه‌ای بی‌نظیر را برای شما رقم بزنیم.`;
export default function Sectionone() {
  return (
    <Container>
      <section className=" flex flex-col md:flex-row mt-8 md:mt-0 justify-around  gap-2 items-center">
        {/* content */}
        <div className="flex-1">
          <div className="mb-5">
            <span className="text-xs text-primary mb-6">
              ارائه انواع خدمات مبل شویی و موکت شویی
            </span>
            <div className="flex items-center justify-normal">
              <Title
                text="مبل شویی اندیشه"
                size="sm"
                className="font-bold whitespace-nowrap w-auto"
              />
              <Separator className="flex-1 mr-4" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
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
        <Image
          src={image}
          width={400}
          height={400}
          className="flex-1"
          alt="dec"
        />
      </section>
    </Container>
  );
}
