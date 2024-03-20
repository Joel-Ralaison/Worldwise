import DesktopMenu from "@/components/NavBar/DesktopMenu";
import MobileMenu from "@/components/NavBar/MobileMenu";

export default function HeaderNavBar() {
  return (
    <header className="fixed z-20 flex h-16 w-full items-center">
      <DesktopMenu />
      <MobileMenu />
    </header>
  );
}
