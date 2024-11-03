import Link from "next/link";
import { Title } from "./Title";
import { buttonVariants } from "../ui/button";
import { ShadowBg } from "./ShadowBg";
import { Container } from "./Container";

interface Items {
  id: number;
  tilte: string;
  href: string;
}

const list: Items[] = [
  { tilte: "خدمات", id: 1, href: "/" },
  { tilte: "نمونه کار", id: 2, href: "/portfolio" },
  { tilte: "بلاگ", id: 3, href: "/" },
  { tilte: "درباره ما", id: 4, href: "/" },
  { tilte: "تماس با ما", id: 5, href: "/contact-us" },
];

export default function Navbar() {
  return (
    <Container>
      <div className="hidden  md:flex w-full items-center justify-between bg-transparent h-[70px]">
        {/* right */}

        <Link href="/">
          {" "}
          <Title text="مبل شویی" size="xl" className=" font-bold" />
        </Link>
        {/* midel */}
        <nav className="flex">
          <ul className="flex">
            {list?.map((item: Items) => (
              <li key={item.id} className="">
                <Link
                  href={item.href}
                  className={`${buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}  `}
                >
                  <Title text={item.tilte} size="xs" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* left */}
        <div>
          <Link
            href={"/reserve"}
            className={`${buttonVariants({ variant: "outline" })}`}
          >
            <Title text={"سفارش آنلاین"} size="xs" />
          </Link>
        </div>
      </div>
    </Container>
  );
}

export function MenuMobile() {
  return (
    <ShadowBg>
      <div className="absolute z-50 flex flex-col gap-4 h-full w-full bg-white overflow-hidden ">
        <nav className="flex pt-7">
          <ul className="flex flex-col gap-4 w-full space-y-3 px-3">
            {list?.map((item: Items) => (
              <>
                <li
                  key={item.id}
                  className="first:border-none border-t border-gray-300 pt-2"
                >
                  <Link
                    href={item.href}
                    className={`text-black hover:text-[#007cfa]`}
                  >
                    <Title text={item.tilte} size="xs" />
                  </Link>
                </li>
              </>
            ))}
          </ul>
        </nav>
      </div>
    </ShadowBg>
  );
}
