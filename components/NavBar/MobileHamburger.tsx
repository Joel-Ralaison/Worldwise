"use client";

import { useMobileMenuStore } from "@/stores/menuStore";
import clsx from "clsx";

export default function MobileHamburger() {
  const open = useMobileMenuStore((store) => store.mobileMenuOpen);
  const toggle = useMobileMenuStore((store) => store.mobileMenuToggle);

  function handleClick() {
    toggle();
  }

  return (
    <article
      className={clsx(
        "group z-30 flex cursor-pointer flex-col gap-1 rounded-lg  p-3 backdrop-blur-sm transition-colors duration-500",
        open
          ? "hover:bg-transparen bg-transparent"
          : "bg-black/15 hover:bg-black/20",
      )}
      onClick={handleClick}
    >
      <div
        className={clsx(
          "relative left-0 h-[3px] w-7 rounded-full bg-white/95 backdrop-blur-sm transition-all duration-300",
          open ? "top-[7px] rotate-45" : "top-0 rotate-0",
        )}
      ></div>

      <div
        className={clsx(
          "visible relative h-[3px] w-7 rounded-full bg-white/95 backdrop-blur-sm transition-all duration-300",
          open ? "opacity-0" : "opacity-100",
        )}
      ></div>

      <div
        className={clsx(
          "relative left-0 h-[3px] w-7 rounded-full bg-white/95 backdrop-blur-sm transition-all duration-300",
          open ? "bottom-[7px] -rotate-45" : "bottom-0 rotate-0",
        )}
      ></div>
    </article>
  );
}
