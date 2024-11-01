import React from "react";
import { Container, Title } from "../shared";
import { Separator } from "../ui/separator";
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

const color: string[] = ["#007cfa", "#ffab00", "#f235a6"];

export default function SectionServices() {
  return (
    <Container>
      <section className=" space-y-3 mt-24">
        {/*  */}
        <div className="flex justify-center items-center">
          <h3 className="text-primary text-xs">
            ارائه بهترین خدمات با قیمت مناسب
          </h3>
        </div>
        {/*  */}
        <div className="flex items-center gap-x-2">
          <Separator className="bg-gray-300 flex-1" />
          <Title text="خدمات ما" size="lg" />
          <Separator className="bg-gray-300 flex-1" />
        </div>
        {/*  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 items-center justify-center gap-x-14">
          {listBox?.map((service: BoxRight, index) => (
            <Card
              title={service.title}
              dec={service.dec}
              imgUrl={service.imgUrl}
              key={service.id}
              bg={color[index]}
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
  bg: string;
}

const Card = ({ title, dec, imgUrl, bg }: Props) => {
  return (
    <div
      className={`bg-[${bg}] flex flex-col items-center min-w-96 space-y-4  rounded-xl px-4 py-9 transition-all cursor-pointer shadow-boxSerice`}
    >
      <div className={`rounded-full  border`}>
        <Image src={imgUrl} alt={title} width={100} height={100} />
      </div>
      <div className="flex flex-col items-center gap-2">
        <Title text={title} size="sm" className="" />
        <p className="whitespace-pre-wrap">{dec}</p>
      </div>
    </div>
  );
};
