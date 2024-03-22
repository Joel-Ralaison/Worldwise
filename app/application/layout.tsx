import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), { ssr: false });

export default function ApplicationLayout() {
  return (
    <main className="h-svh w-svw bg-gray-800">
      <AddCity />

      <section className="h-full w-full items-center justify-center">
        <Map />
      </section>
    </main>
  );
}

import { MdAddCircle } from "react-icons/md";

function AddCity() {
  return (
    <button
      type="button"
      className="fixed right-2 top-[calc(100vh-75px)] z-[15] flex cursor-pointer items-center justify-center gap-4 rounded-lg bg-black/40 px-6 py-[8px] backdrop-blur-md transition-colors duration-500 hover:bg-black/55 md:z-20"
    >
      <h4 className="text-lg font-semibold text-white">Add</h4>
      <MdAddCircle fontSize={28} fill="white" />
    </button>
  );
}
