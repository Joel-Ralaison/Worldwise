"use client";

import { useActiveActionStore } from "@/stores/cityManagerStore";
import { useSearchStore } from "@/stores/searchStore";
import { BsBuildingsFill } from "react-icons/bs";

export default function Cities() {
  const setAction = useActiveActionStore((store) => store.setAction);
  const setShowSearch = useSearchStore((store) => store.setShowSearch);

  function handleClick() {
    setAction("list");
    setShowSearch(false);
  }

  return (
    <button
      type="button"
      className="flex max-w-[150px] items-center justify-between gap-2 rounded-lg bg-black/65 px-4 py-2"
      onClick={handleClick}
    >
      <h4 className="font-semibold text-white">Cities</h4>
      <BsBuildingsFill fontSize={20} fill="white" className="hidden md:block" />
    </button>
  );
}
