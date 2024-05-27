"use client";

import {
  useActiveActionStore,
  useCityManagerStore,
} from "@/stores/cityManagerStore";
import { useMobileMenuStore } from "@/stores/menuStore";
import clsx from "clsx";
import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "Pricing", href: "pricing" },
  { name: "Product", href: "product" },
  { name: "Map", href: "application" },
  { name: "Login", href: "login" },
];

export default function MobileNavigation() {
  const show = useMobileMenuStore((store) => store.mobileMenuOpen);
  const toogle = useMobileMenuStore((store) => store.mobileMenuToggle);

  return (
    <>
      <nav
        className={clsx(
          "fixed top-0 z-20 h-full w-[60vw] bg-teal-700 pt-14 transition-all duration-500",
          show ? "right-0" : "-right-[65vw]",
          "flex flex-col items-center",
        )}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => {
              toogle();
              useCityManagerStore.getState().managerReset();
              useActiveActionStore.getState().actionReset();
            }}
            className={clsx(
              "w-[100%] py-2 pl-[20vw] text-lg text-white transition-all duration-150 hover:scale-110 hover:pl-[22vw] md:text-2xl",
            )}
          >
            {link.name}
          </Link>
        ))}

        <div className="absolute bottom-0 left-0 flex h-[50px] w-[60vw] items-center justify-center gap-1 bg-teal-600 text-white">
          <span>Thank You</span>
          <span>for your Visit!</span>
        </div>
      </nav>

      <span
        className={clsx(
          "fixed inset-0 z-[15] bg-black/25 backdrop-blur-[2px] transition-all",
          show ? "block opacity-100" : "hidden opacity-0",
        )}
        onClick={() => toogle()}
      />
    </>
  );
}
