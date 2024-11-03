import Navbar, { MenuMobile } from "./Navbar";
import { FixedBg } from "./ShadowBg";

export default function Header() {
  return (
    <header>
      <FixedBg>
        <Navbar />
      </FixedBg>
      <MenuMobile />
    </header>
  );
}
