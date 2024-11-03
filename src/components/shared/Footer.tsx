import React from "react";
import { Container } from "./Container";
import { Title } from "./Title";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { Phone } from "lucide-react";
import { FaInstagramSquare, FaTelegram } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

export default function Footer() {
  return (
    <>
      <footer className="mt-5 flex flex-col relative bg-[#051625] md:h-[461.17px]">
        <Container className="flex flex-col gap-4 md:pt-24">
          <div className="flex-1 flex flex-col space-y-4 md:space-y-0 md:flex-row items-center md:items-baseline justify-between">
            <div className="flex flex-col space-y-4 items-center md:items-stretch  truncate text-wrap max-w-[300px]">
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

            <div className="flex flex-col justify-center items-center md:block space-y-4 max-w-[250px]">
              <Title text="آخرین مطالب" size="sm" className="text-white" />
              <ul className="flex items-center flex-col space-y-3">
                <li>
                  <Link href="/" className="text-gray-300">
                    نحوه خشک شویی مبلمان
                  </Link>
                </li>
              </ul>
            </div>
            <div className=" space-y-4 flex flex-col items-center md:items-start max-w-[250px]">
              <Title
                text="تماس با ما"
                size="sm"
                className="text-white font-bold"
              />
              <div>
                <span className="text-white text-sm ">
                  با ما در تماس باشید! در سریع ترین زمان پاسخگو هستیم.
                </span>
              </div>
              <div className="flex items-center gap-x-3">
                <Phone className="rotate-90 text-white" />
                <span className="text-white text-sm ">شماره تماس</span>
                <span className="text-white text-sm ">09361239724</span>
              </div>
            </div>
            <div className="flex justify-center text-center text-white max-w-[250px] min-w-[250px]">
              مجوزهای ما
            </div>
          </div>
          <div className="h-[100px] flex flex-row items-center justify-center md:justify-start gap-x-4 text-white">
            <Link href="/" className="hover:text-[#4977E5]">
              {" "}
              <FaTelegram size={25} />
            </Link>
            <Link href="/" className="hover:text-[#4977E5]">
              {" "}
              <RiWhatsappFill size={25} />
            </Link>
            <Link href="/" className="hover:text-[#4977E5]">
              {" "}
              <FaInstagramSquare size={25} />
            </Link>
          </div>
        </Container>
        <div className="flex flex-col items-center  text-white py-3">
          <Separator className="bg-gray-500" />
          <span className="text-gray-400 hover:text-gray-300">
            {" "}
            طراح سایت جواد احمدی
          </span>
        </div>
      </footer>
    </>
  );
}
