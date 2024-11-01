import React from "react";
import { Container } from "./Container";
import { Title } from "./Title";
import { Separator } from "../ui/separator";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="mt-5 flex flex-col items-center gap-4 relative bg-[#001892]">
        <Container>
          <div className="grid grid-cols-1 gap-y-4  md:grid-cols-4 md:gap-x-7 justify-between md:space-x-4 py-9">
            <div className="flex flex-col space-y-4">
              <Title
                text="خدمات اندیشه"
                size="sm"
                className="text-white font-yekan "
              />
              <p className="text-gray-300 text-lg text-justify">
                شستشوی تخصصی مبلمان با دستگاه های مدرن و مواد درجه 1 به صورت
                تضمینی توسط افراد حرفه ای و مجرب انجام می شود و دریافت وجه در
                صورت رضایت مشتری و پس از اتمام کار صورت می گیرد.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center md:block space-y-4">
              <Title text="آخرین مطالب" size="sm" className="text-white" />
              <ul className="flex items-center flex-col space-y-3">
                <li>
                  <Link href="/" className="text-gray-300">
                    نحوه خشک شویی مبلمان
                  </Link>
                </li>
              </ul>
            </div>
            <div className=" space-y-4 flex flex-col items-center md:items-start">
              <Title text="تماس با ما" size="sm" className="text-white" />
              <div>
                <span className="text-white">
                  با ما در تماس باشید! در سریع ترین زمان پاسخگو هستیم.
                </span>
              </div>
              <div className="flex items-center gap-x-3">
                <Title text="شماره تماس" size="xs" className="text-white" />
                <span className="text-white">09361239724</span>
              </div>
            </div>
            <div className="flex justify-center text-center text-white">
              مجوزهای ما
            </div>
          </div>
          <div className=" flex flex-col items-center  text-white py-3">
            <Separator className="bg-gray-500" />
            <span className="text-gray-400 hover:text-gray-300">
              {" "}
              طراح سایت جواد احمدی
            </span>
          </div>
        </Container>
      </footer>
    </>
  );
}
