import BodyBackground from "@/components/Reusables/BodyBackground";
import { img1 } from "@/constants/images";
import Image from "next/image";

export default function ProductPage() {
  return (
    <main className="mx-auto flex h-svh w-full max-w-screen-lg items-center justify-center gap-6">
      <div className="w-[50%] overflow-hidden rounded-lg bg-slate-500 sm:hidden md:block 2xl:w-[55%]">
        <Image
          src={img1}
          alt="Track beatiful cities by pointing their location"
        />
      </div>

      <section className="flex w-[50%] flex-col gap-5 text-lg text-zinc-100 md:w-[50vw] 2xl:w-[55%]">
        <h2 className="text-2xl text-teal-200 lg:text-4xl 2xl:text-6xl">
          About WorldWise.
        </h2>

        <p className="text-base text-zinc-200 md:text-lg lg:text-xl 2xl:text-2xl">
          At WorldWise, we&apos;re passionate about exploration. Our mission is
          to inspire and empower adventurers like you to discover the beauty of
          our planet.
        </p>

        <p>
          Driven by a love for travel and technology, we&apos;ve crafted an
          innovative platform that seamlessly blends mapping technology with the
          thrill of discovery.
        </p>

        <p className="text-base text-zinc-200 md:text-lg lg:text-xl 2xl:text-2xl">
          Join us as we embark on a journey to map the world&apos;s wonders and
          create unforgettable memories along the way.
        </p>
      </section>

      <BodyBackground imgSrc={img1} />
    </main>
  );
}
