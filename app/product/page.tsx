import BodyBackground from "@/components/Reusables/BodyBackground";
import { img1 } from "@/constants/images";
import Image from "next/image";

export default function ProductPage() {
  return (
    <main className="mx-auto flex h-svh w-full max-w-screen-lg items-center justify-center gap-6">
      <div className="w-[40%] max-w-[350px] overflow-hidden rounded-lg shadow-lg shadow-neutral-950/85 sm:hidden md:block">
        <Image
          src={img1}
          alt="Track beatiful cities by pointing their location"
        />
      </div>

      <section className="flex w-[50%] flex-col justify-center py-4 text-lg text-zinc-200 max-md:w-[90%]">
        <h2 className="text-2xl text-teal-200 lg:text-4xl 2xl:text-6xl">
          About WorldWise.
        </h2>

        <p className="mt-6 max-md:mt-4 md:text-lg lg:text-xl 2xl:text-2xl">
          At WorldWise, we&apos;re passionate about exploration. Our mission is
          to inspire and empower adventurers like you to discover the beauty of
          our planet.
        </p>

        <p className="mt-4 md:text-lg lg:text-xl 2xl:text-2xl">
          Driven by a love for travel and technology, we&apos;ve crafted an
          innovative platform that seamlessly blends mapping technology with the
          thrill of discovery.
        </p>

        <p className="mt-4 md:text-lg lg:text-xl 2xl:text-2xl">
          Join us as we embark on a journey to map the world&apos;s wonders and
          create unforgettable memories along the way.
        </p>
      </section>

      <BodyBackground imgSrc={img1} />
    </main>
  );
}
