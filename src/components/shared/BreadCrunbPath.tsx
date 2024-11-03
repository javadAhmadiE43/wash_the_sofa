import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Title } from "./Title";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  paths?: string[];
  title: string;
}

export default function BreadCrunbPath({ paths, className, title }: Props) {
  return (
    <div
      className={`${cn(
        `
        flex flex-col space-y-4 items-center justify-center
        relative bg-banner-7 bg-no-repeat bg-center bg-cover h-[226.85px] w-full 
            before:bg-[#406ACF]/75  before:absolute before:top-0 before:left-0 before:right-0
             before:w-full before:h-full`,
        className
      )}`}
    >
      <Title text={title} size="lg" className="text-white relative z-40" />
      <Breadcrumb className="relative z-40 text-white">
        <BreadcrumbList className="text-white">
          <BreadcrumbPage>
            <BreadcrumbLink href="/portfolio"> </BreadcrumbLink>
          </BreadcrumbPage>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/">خانه</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
