import BodyBackground from "@/components/Reusables/BodyBackground";
import { bgHome } from "@/constants/images";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="h-screen w-screen font-sans text-zinc-100">
      <section className="inset-0 flex h-full w-full flex-col items-start justify-around pt-12">
        <div className="flex flex-col gap-[6vh] pl-[20vw]">
          <h1 className="flex flex-col gap-2">
            <span className="bg-gradient-to-r from-teal-300 to-emerald-200 bg-clip-text text-5xl font-bold text-transparent">
              You travel the world.
            </span>
            <span className="text-xl text-white">
              WorldWise keeps track of your adventures.
            </span>
          </h1>

          <p className="w-[70%] max-w-[800px] pl-4 text-lg">
            A world map that tracks your footsteps into every city you can think
            of. Never forget your wonderful experiences, and show your friends
            how you have wandered the world.
          </p>
        </div>

        <div className="flex w-full justify-center">
          <Link
            href="/login"
            className="rounded-lg bg-gradient-to-tr from-teal-500 to-emerald-500 px-6 py-3 text-lg font-bold text-zinc-900 transition-all hover:from-teal-600 hover:to-emerald-600"
          >
            START TRACKING NOW
          </Link>
        </div>
      </section>
      <BodyBackground imgSrc={bgHome} />
    </main>
  );
}
