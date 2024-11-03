import { cn } from "@/lib/utils";
import { Container } from "./Container";

export function BannerBox({ className }: { className?: string }) {
  return (
    <Container className="mt-16">
      <div
        className={`${cn(
          `relative rounded-xl bg-banner-7 bg-no-repeat bg-center bg-cover h-32 md:h-[226.85px] w-full 
        before:bg-[#406ACF]/75 before:rounded-xl before:absolute before:top-0 before:left-0 before:right-0
        before:w-full before:h-full`,
          className
        )}`}
      ></div>
    </Container>
  );
}
