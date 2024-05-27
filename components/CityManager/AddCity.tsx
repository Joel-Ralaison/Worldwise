"use client";

import { useActiveActionStore } from "@/stores/cityManagerStore";
import { useSearchStore } from "@/stores/searchStore";
import { MdAddCircle } from "react-icons/md";

export default function AddCity() {
  const setAction = useActiveActionStore((store) => store.setAction);
  const setShowSearch = useSearchStore((store) => store.setShowSearch);

  function handleClick() {
    setAction("add");
    setShowSearch(false);
  }

  return (
    <button
      type="button"
      className="flex h-[45px] max-w-[100px] items-center gap-2 rounded-lg bg-black/65 px-4 py-2"
      onClick={handleClick}
    >
      <h4 className="font-semibold text-white">Add</h4>
      <MdAddCircle fontSize={22} fill="white" className="hidden md:block" />
    </button>
  );
}
