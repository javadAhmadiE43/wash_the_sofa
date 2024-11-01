import { Container, Title } from "../shared";
import { Separator } from "../ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
interface ListItmes {
  id: number;
  title: string;
  dec: string;
}

const list: ListItmes[] = [
  {
    id: 1,
    title: "آیا هزینه ایاب ذهاب دریافت می کنند؟",
    dec: "خیر، هیچ هزینه ایاب و ذهابی از شما دریافت نمی‌شود.",
  },
  {
    id: 2,
    title: "دستگاه مبل شویی, با بخار هست و یا آب و کف؟",
    dec: "می توانید هم از دستگاه های بخار شور برای مبل شویی استفاده کنید و هم از طریق دستگاه مبل شویی که به میزان زیادی کف تولید می کنه. بسته به میزان کثیفی مبل هایی که دارید، می تونید نوع مورد نظر رو انتخاب کنید.",
  },
  {
    id: 3,
    title: "هزینه مبل شویی به جه صورت است؟",
    dec: "بستگی به تعداد مبل و نوع و جنس پارچه مبل شما دارد که با نظر متخصصین تعیین می‌شود.",
  },
  {
    id: 4,
    title: "شستشوی مبل با چه موادی انجام می شود؟",
    dec: "در حقیقت شستشوی مبل به کمک دستگاه های شستشوی مبل انجام می‌گیره که از فوم های شستشوی متراکم برای شستشو استفاده می‌کنند. این فوم های شستشو از ترکیب مواد شوینده آلمانی تهیه شدند.",
  },
];

export default function Frequently_asked_questions() {
  return (
    <Container>
      <section className=" mt-14 p-2 space-y-4">
        <div className="flex flex-col items-center">
          <p className="text-sm text-blue-800">سوالات پر تکرار</p>
        </div>
        <div className="flex items-center gap-x-2">
          <Separator className="bg-gray-300 flex-1" />
          <Title text="سوالات متداول" size="md" className="" />
          <Separator className="bg-gray-300 flex-1" />
        </div>
        <div className="">
          <Accordion
            type="single"
            collapsible
            className="w-full grid grid-cols-2 grid-flow-row gap-x-8 gap-y-8"
          >
            {list?.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.title}
                className="border border-gray-300 rounded-2xl p-2"
              >
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>{item.dec}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </Container>
  );
}
