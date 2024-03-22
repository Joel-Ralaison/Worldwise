"use client";

import { useActiveActionStore } from "@/utils/cityManagerStore";
import { MdAddCircle } from "react-icons/md";

export default function AddCity() {
  const setAction = useActiveActionStore((store) => store.setAction);

  function handleClick() {
    setAction("add");
  }

  return (
    <button
      type="button"
      className="flex h-[45px] w-[100px] items-center gap-2 rounded-lg bg-black/65 px-4 py-2"
      onClick={handleClick}
    >
      <h4 className="font-semibold text-white">Add</h4>
      <MdAddCircle fontSize={22} fill="white" />
    </button>
  );
}
