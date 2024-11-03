import { Container } from "@/components";
import BreadCrunbPath from "@/components/shared/BreadCrunbPath";
import type { Metadata } from "next";
interface Props {
  readonly children: React.ReactNode;
}
export const metadata: Metadata = {
  title: "رزور",
  description: "",
};
export default function layout({ children }: Props) {
  return (
    <Container className="md:p-0 mt-16">
      <BreadCrunbPath title="سفارش آنلاین" />
      {children}
    </Container>
  );
}
