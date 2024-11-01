import Navbar, { MenuMobile } from "./Navbar";
import { Container } from "./Container";

export default function Header() {
  return (
    <header className={`absolute top-0 left-0 right-0 z-40 `}>
      <Container className="px-4">
        <Navbar />
      </Container>
      <MenuMobile />
    </header>
  );
}
