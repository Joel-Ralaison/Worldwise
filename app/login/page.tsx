"use client";

import { img3 } from "@/constants/images";
import BodyBackground from "../../components/Reusables/BodyBackground";

export default function LoginPage() {
  function handleSubmit() {}

  return (
    <main className="flex h-svh w-svw flex-col items-center justify-center pt-3">
      <form
        className="flex h-[70vh] max-h-[500px] w-[80vw] max-w-[500px] flex-col items-center justify-center gap-8 rounded-lg bg-white/15"
        onSubmit={handleSubmit}
      >
        <h2 className="bg-gradient-to-r from-teal-400 to-emerald-200 bg-clip-text text-3xl font-bold text-transparent">
          Login
        </h2>

        <div className="flex w-[70%] flex-col items-center gap-3">
          <input
            type="email"
            id="email"
            aria-label="email"
            placeholder="Email"
            className="h-[45px] w-full max-w-[350px] rounded-lg bg-white/50 px-4 text-lg text-black outline-none transition-all placeholder:text-zinc-900 focus:border-b focus:border-white/50"
          />

          <input
            type="password"
            id="password"
            aria-label="password"
            placeholder="Password"
            className="h-[45px] w-full max-w-[350px] rounded-lg bg-white/50 px-4 text-lg text-black outline-none transition-all placeholder:text-zinc-900 focus:border-b focus:border-white/50"
          />
        </div>

        <div>
          <button
            type="button"
            className="rounded-lg bg-black px-8 py-3 text-lg font-bold text-white transition-colors hover:bg-teal-400 hover:text-black"
          >
            Submit
          </button>
        </div>
      </form>

      <BodyBackground imgSrc={img3} />
    </main>
  );
}
