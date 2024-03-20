import MobileHamburger from "./MobileHamburger";
import MobileNavigation from "./MobileNavigation";

export default function MobileMenu() {
  return (
    <article className="flex w-full items-center justify-end pl-4 pr-2 md:hidden">
      <MobileHamburger />
      <MobileNavigation />
    </article>
  );
}
