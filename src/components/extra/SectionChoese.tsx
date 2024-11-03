import React from "react";
import { Container, Title } from "../shared";
import Image from "next/image";

interface ListItems {
  id: number;
  title: string;
  dec: string;
}

const list: ListItems[] = [
  {
    id: 1,
    title: "استفاده از بهترین مواد و دستگاه ها",
    dec: "ما برای شستشوی مبل و موکت های شما از بهترین مواد خارجی و پیشرفته ترین دستگاه ها استفاده میکنم.",
  },
  {
    id: 2,
    title: "قیمت های کمتر از همکاران",
    dec: "خدمات بدون واسطه در کنار مزیت قیمتی مناسب باعث شده است تا بهترین قیمت مبل شویی را ارائه دهیم.",
  },
  {
    id: 3,
    title: "ضمانت خدمات و بهداشت",
    dec: "رعایت تمامی پروتکل‌های بهداشتی و دستورالعمل های ابلاغی از اتحادیه و مدیریت کامل ریسک در شستشوی مبل",
  },
];

export default function SectionChoese() {
  return (
    <Container
      className={`flex flex-col justify-between items-center rounded-xl relative  w-full mt-16
        `}
    >
      <div className="flex flex-col space-y-4 items-center justify-center mb-7">
        <div className="flex gap-3 items-center">
          <Title
            text="چرا انتخاب مبل شویی ما؟"
            size="md"
            className="font-semibold"
          />
        </div>
        <p className="whitespace-nowrap text-xs text-[#838B95]">
          مبل شویی اندیشه, با کیفیت ترین خدمات مبل شویی را در اندیشه ارائه می
          دهد.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-around">
        <div className="flex ">
          <Image src={`/images/banner-5.jpg`} alt="" width={400} height={400} />
        </div>
        <div className="flex  p-4 h-full w-full  md:w-1/2 space-y-10 flex-col bg-[#FFFFFFE6] relative z-40 overflow-hidden">
          {/*  */}
          {list?.map((item: ListItems) => (
            <div key={item.id} className="flex flex-col space-y-4">
              <Title text={item.title} size="xs" className="font-semibold" />
              <p className="whitespace-normal  text-xs text-[#838B95]">
                {item.dec}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

// export default function SectionChoese() {
//   return (
//     <div
//       className={` bg-fixed flex  rounded-xl relative  bg-banner-2 bg-center bg-no-repeat bg-cover w-full mt-20
//         before:content-[''] before:bg-[#001892] before:opacity-75 before:absolute before:top-0 before:left-0 before:right-0 before:w-full before:h-full
//         `}
//     >
//       <div className="hidden md:flex w-1/2 "></div>
//       <div className="flex  p-4 h-full w-full  md:w-1/2 space-y-10 flex-col bg-[#FFFFFFE6] relative z-40 overflow-hidden">
//         <p className="text-lg text-blue-800">مبل شویی تخصصی در اندیشه</p>
//         {/*  */}
//         <div className=" flex flex-col gap-3">
//           <div className="flex gap-3 items-center">
//             <Title
//               text="چرا انتخاب مبل شویی ما؟"
//               size="md"
//               className="font-semibold"
//             />
//             <Separator className="bg-gray-300 flex-1" />
//           </div>
//           <p className="whitespace-nowrap">
//             مبل شویی اندیشه, با کیفیت ترین خدمات مبل شویی را در اندیشه ارائه می
//             دهد.
//           </p>
//         </div>
//         {list?.map((item: ListItems) => (
//           <div key={item.id} className="flex flex-col space-y-4">
//             <Title text={item.title} size="md" className="font-semibold" />
//             <p className="whitespace-normal text-gray-500 text-lg">
//               {item.dec}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
