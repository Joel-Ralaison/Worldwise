"use client";

import { useCityManagerStore } from "@/utils/cityManagerStore";
import clsx from "clsx";

import ManageActions from "@/components/CityManager/ManageActions";
import ContentAction from "./ContentAction";

export default function CityManagerPage() {
  const managerOpen = useCityManagerStore((store) => store.managerOpen);

  return (
    <section
      className={clsx(
        "fixed bottom-[20px] right-[10px] z-[15] flex flex-col gap-[10px] overflow-hidden rounded-lg bg-black/60 backdrop-blur-[2px] transition-all duration-[250ms] ease-in-out",
        managerOpen
          ? "h-[55svh] w-[85svw] p-2 shadow-md shadow-black/25 md:w-[65vw] lg:w-[50vw] 2xl:w-[40vw]"
          : "h-[45px] w-[140px] p-0",
      )}
    >
      <ManageActions />
      <ContentAction />
    </section>
  );
}
