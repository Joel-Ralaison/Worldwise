import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), { ssr: false });

export default function MainMap() {
  return (
    <section className="h-full w-full items-center justify-center">
      <Map />
    </section>
  );
}
