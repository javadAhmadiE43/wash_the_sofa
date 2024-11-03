import { BannerBox, Container, Title } from "@/components";
import BreadCrunbPath from "@/components/shared/BreadCrunbPath";
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
      <Container className="md:p-0 p-0 md:mt-16">
        <BreadCrunbPath title="نمونه کار" className="" />
        {children}
      </Container>
    </div>
  );
}
