"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { logo } from "@/constants/images";
import { useMobileMenuStore } from "@/utils/menuStore";

export default function Logo() {
  const router = useRouter();
  const hideMobileMenu = useMobileMenuStore((store) => store.mobileMenuHide);

  function handleClick() {
    hideMobileMenu();
    router.push("/");
  }

  return (
    <button
      title="worldwise"
      type="button"
      onClick={handleClick}
      className="fixed left-3 top-2 z-[19] w-[150px] rounded-md bg-black/40 px-2 pb-3 pt-[10px] backdrop-blur-md transition-colors duration-500 hover:bg-black/50"
    >
      <Image
        src={logo}
        alt="Worldwise logo"
        style={{ height: "26px", objectFit: "contain" }}
      />
    </button>
  );
}
