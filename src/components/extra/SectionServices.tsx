import React from "react";
import { Container, Title } from "../shared";
import Image from "next/image";

interface BoxRight {
  id: number;
  title: string;
  dec: string;
  imgUrl: string;
}

const listBox: BoxRight[] = [
  {
    id: 1,
    title: "شیتشوی مبلمان",
    dec: "شستشوی انواع مبلمان و صندلی های ایرانی و خارجی",
    imgUrl: "/images/chers-2.png",
  },
  {
    id: 2,
    title: "شستشوی انواع صندلی",
    dec: "صندلی‌های اداری، سالن همایشات، تئاتر و سینماها، کافه، رستوران و ...",
    imgUrl: "/images/chers-1.png",
  },
];

export default function SectionServices() {
  return (
    <Container>
      <section className=" space-y-9 md:mt-10">
        {/*  */}
        <div className="flex flex-col justify-center items-center gap-y-2 mb-5">
          <Title text="خدمات ما" size="lg" />
          <h3 className="text-[#838B95] text-xs">
            ارائه بهترین خدمات با قیمت مناسب
          </h3>
        </div>
        {/*  */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center ">
          {listBox?.map((service: BoxRight) => (
            <Card
              title={service.title}
              dec={service.dec}
              imgUrl={service.imgUrl}
              key={service.id}
            />
          ))}
        </div>
      </section>
    </Container>
  );
}

interface Props {
  title: string;
  dec: string;
  imgUrl: string;
}

const Card = ({ title, dec, imgUrl }: Props) => {
  return (
    <div
      className={`group bg-white flex flex-col items-start space-y-4 p-6  rounded-xl transition-all cursor-pointer shadow-boxSerice min-h-[284.76px] min-w-[360px] max-w-[360px] max-h-[284.76px] hover:bg-[#4977E5] overflow-hidden`}
    >
      <div
        className={`flex items-center justify-center bg-[#86A8FB] group-hover:bg-transparent rounded-full p-2 group-hover:text-white`}
      >
        <Image src={imgUrl} alt={title} width={70} height={70} className="" />
      </div>
      <div className="flex flex-col items-start gap-4 group-hover:text-white">
        <Title text={title} size="sm" className="text-start" />
        <p className="whitespace-pre-wrap text-start text-xs text-[#838B95] group-hover:text-white truncate">
          {dec}
        </p>
      </div>
    </div>
  );
};
