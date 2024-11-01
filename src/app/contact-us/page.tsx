import { Title } from "@/components";
import Image from "next/image";
import React from "react";

interface Props {
  id: number;
  title: string;
  content: string;
  img: string;
}

const items: Props[] = [
  {
    id: 1,
    title: "تلفن تماس",
    content: "09361239724",
    img: "/images/contact-icon-2.png",
  },
  {
    id: 2,
    title: "پاسخگویی",
    content: "24 ساعت 7 روز هفته",
    img: "/images/contact-icon-3.png",
  },
  {
    id: 3,
    title: "ایمیل",
    content: "mohammad@gmail.com",
    img: "/images/contact-icon-1.png",
  },
];

const color: string[] = ["#007cfa", "#ffab00", "#f235a6"];

export default function page() {
  return (
    <div className="grid p-9 grid-cols-1 md:grid-cols-3 gap-3 items-center justify-center">
      {items?.map((item, index) => (
        <div
          key={item.id}
          className={`bg-[${color[index]}] py-4 flex flex-col items-center space-y-2 shadow-boxSerice rounded-xl`}
        >
          <Image src={item.img} alt={item.title} width={100} height={100} />
          <Title text={item.title} size="sm" />
          <span className="text-gray-300">{item.content}</span>
        </div>
      ))}
    </div>
  );
}
