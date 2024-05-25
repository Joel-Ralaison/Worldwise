import BodyBackground from "@/components/Reusables/BodyBackground";
import { bgHome } from "@/constants/images";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="h-svh w-svw font-sans text-zinc-100">
      <section className="flex h-full w-full flex-col items-center justify-between pb-8 pt-20">
        <div className="flex h-fit flex-col gap-[3vh] overflow-auto px-8">
          <h1 className="flex flex-col gap-6">
            <span className="bg-gradient-to-r from-teal-300 to-emerald-200 bg-clip-text text-4xl font-bold text-transparent">
              You travel the world.
            </span>
            <span className="text-xl text-white">
              WorldWise keeps track of your adventures.
            </span>
          </h1>

          <p className="mx-auto w-full max-w-[800px] pb-10 text-xl text-zinc-200 max-md:text-base">
            A world map that tracks your footsteps into every city you can think
            of. Never forget your wonderful experiences, and show your friends
            how you have wandered the world. Let WorldWise be your compass,
            guiding you to new horizons and unforgettable experiences. Imagine a
            world where every destination is at your fingertips, where each city
            you visit becomes a cherished memory etched into the fabric of your
            life. With WorldWise, this dream becomes a reality.
          </p>
        </div>

        <div className="flex w-full justify-center">
          <Link
            href="/login"
            className="rounded-lg bg-gradient-to-r from-neutral-200 to-neutral-400 px-6 py-3 text-lg font-bold text-zinc-900 transition-colors duration-500 hover:from-emerald-500 hover:to-teal-500"
          >
            START TRACKING NOW
          </Link>
        </div>
      </section>

      <BodyBackground imgSrc={bgHome} />
    </main>
  );
}
