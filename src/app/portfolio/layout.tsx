import { Title } from "@/components";
import type { Metadata } from "next";
interface Props {
  readonly children: React.ReactNode;
}
export const metadata: Metadata = {
  title: "نمونه کار",
  description: "",
};
export default function layout({ children }: Props) {
  return (
    <div>
      <div
        className={`relative flex flex-col justify-center items-center bg-bg-image-header bg-center bg-no-repeat bg-cover h-[70vh]
        before:content-[''] before:absolute before:bg-[#001892] before:h-full before:w-full before:opacity-75
      `}
      >
        <Title text="نمونه کار" size="lg" className="z-50 text-white" />
      </div>
      {children}
    </div>
  );
}
