"use client";

import { useMobileMenuStore } from "@/utils/menuStore";
import clsx from "clsx";

export default function MobileHamburger() {
  const open = useMobileMenuStore((store) => store.mobileMenuOpen);
  const toggle = useMobileMenuStore((store) => store.mobileMenuToggle);

  function handleClick() {
    toggle();
  }

  return (
    <section
      className="group z-20 flex cursor-pointer flex-col gap-1 p-5"
      onClick={handleClick}
    >
      <div
        className={clsx(
          "relative left-0 h-[3px] w-7 rounded-full bg-white transition-all duration-300",
          open ? "top-[7px] rotate-45" : "top-0 rotate-0",
        )}
      ></div>

      <div
        className={clsx(
          "visible relative h-[3px] w-7 rounded-full bg-white transition-all duration-300",
          open ? "opacity-0" : "opacity-100",
        )}
      ></div>

      <div
        className={clsx(
          "relative left-0 h-[3px] w-7 rounded-full bg-white transition-all duration-300",
          open ? "bottom-[7px] -rotate-45" : "bottom-0 rotate-0",
        )}
      ></div>
    </section>
  );
}
