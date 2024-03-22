"use client";

import { useCityManagerStore } from "@/utils/cityManagerStore";
import { BsMapFill, BsFillArrowDownRightSquareFill } from "react-icons/bs";

export function ShowCityManager() {
  const managerToogle = useCityManagerStore((store) => store.managerToogle);
  return (
    <button
      type="button"
      className="flex h-[50px] w-[140px] items-center justify-between gap-2 rounded-lg bg-black/65 px-4"
      onClick={() => managerToogle()}
    >
      <h4 className="font-semibold text-white">My Places</h4>
      <BsMapFill fontSize={22} fill="white" />
    </button>
  );
}

export function HideCityManager() {
  const managerToogle = useCityManagerStore((store) => store.managerToogle);

  return (
    <button
      type="button"
      title="close"
      className="absolute right-0 flex h-[45px] w-[100px] items-center justify-between gap-2 rounded-lg bg-black/65 px-4 py-2"
      onClick={() => managerToogle()}
    >
      <span className="font-semibold text-white">Close</span>
      <BsFillArrowDownRightSquareFill fontSize={25} fill="white" />
    </button>
  );
}
