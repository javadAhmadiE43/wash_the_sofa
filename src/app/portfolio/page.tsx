import { Container, Title } from "@/components";
import Image from "next/image";
import React from "react";

interface Props {
  id: number;
  img: string;
}

const item: Props[] = [
  { id: 1, img: "/images/works-instance/Project_1_img.png" },
  { id: 2, img: "/images/works-instance/Project_2_img.png" },
  { id: 3, img: "/images/works-instance/Project_3_img.png" },
  { id: 4, img: "/images/works-instance/Project_4_img.png" },
  { id: 5, img: "/images/works-instance/Project_5_img.png" },
  { id: 6, img: "/images/works-instance/Project_6_img.png" },
  { id: 7, img: "/images/works-instance/Project_7_img.png" },
  { id: 8, img: "/images/works-instance/Project_8_img.png" },
];

export default function page() {
  return (
    <Container>
      {/* <div>
        <Title text="نمونه کار " size="lg" className="p-3 " />
      </div> */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 py-7">
        {item?.map((item: Props) => (
          <Image
            src={item.img}
            alt=""
            width={200}
            height={200}
            className="h-full w-full rounded-lg shadow-boxSerice"
          />
        ))}
      </div>
    </Container>
  );
}
