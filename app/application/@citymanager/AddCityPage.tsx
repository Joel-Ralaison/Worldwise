export default function AddCityPage() {
  return (
    <article className="flex h-full w-full">
      <div className="flex h-full w-[50%] items-center">
        <h2 className="bg-gradient-to-r from-teal-500 to-green-500 bg-clip-text pl-2 font-black leading-[2rem] text-transparent md:text-xl lg:text-3xl 2xl:text-5xl">
          TRACK YOUR FAVORITE PLACES WITH WORLDWISE
        </h2>
      </div>

      <form
        action=""
        className="flex h-full w-[50%] flex-col items-center justify-center gap-4 bg-teal-600 lg:gap-10"
      >
        <h5 className="text-2xl font-bold leading-tight text-white lg:text-3xl 2xl:text-4xl">
          NEW CITY.
        </h5>

        <input
          type="text"
          aria-label="cityName"
          name="cityName"
          placeholder="City name..."
          autoComplete="false"
          className="h-[40px] w-[75%] max-w-[250px] border-b border-white bg-clip-text pl-2 text-lg text-zinc-50 placeholder-zinc-300 caret-white outline-none placeholder:font-normal lg:text-xl 2xl:text-2xl"
        />

        <section className="flex gap-3 max-md:flex-col">
          <button
            type="submit"
            className="rounded-md border border-zinc-50 px-4 py-1 text-lg text-zinc-50 transition-all hover:bg-zinc-50 hover:text-black max-md:py-[2px] lg:px-8 lg:py-[6px] lg:text-xl"
          >
            Search
          </button>

          <button
            type="submit"
            className="rounded-md border border-zinc-50 px-4 py-1 text-lg text-zinc-50 transition-all hover:border-emerald-400 hover:bg-emerald-400 max-md:py-[2px] lg:px-8 lg:py-[6px] lg:text-xl"
          >
            Add
          </button>
        </section>
      </form>
    </article>
  );
}
