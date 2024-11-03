import { BannerBox, ContentHeader } from "@/components";
import Frequently_asked_questions from "@/components/extra/Frequently_asked_questions";
import SectionChoese from "@/components/extra/SectionChoese";
import Sectionone from "@/components/extra/Sectionone";
import SectionServices from "@/components/extra/SectionServices";

export default function Home() {
  return (
    <>
      <ContentHeader />
      <SectionServices />
      <Sectionone />
      <SectionChoese />
      <BannerBox />
      <Frequently_asked_questions />
    </>
  );
}
