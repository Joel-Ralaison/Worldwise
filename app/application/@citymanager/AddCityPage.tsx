export default function AddCityPage() {
  return (
    <article className="flex h-full w-full">
      <div className="flex h-full w-[40%] items-center">
        <h2 className="bg-gradient-to-r from-teal-500 to-green-500 bg-clip-text pl-2 text-[25px] font-black leading-[2rem] text-transparent">
          TRACK YOUR FAVORITE PLACES WITH WORLDWISE
        </h2>
      </div>

      <form
        action=""
        className="flex h-full w-[65%] flex-col items-center justify-center gap-4"
      >
        <input
          type="text"
          aria-label="cityName"
          name="cityName"
          placeholder="Enter a new city"
          autoComplete="false"
          className="h-[40px] w-[75%] max-w-[250px] border-b border-white bg-transparent pl-2 text-lg text-white outline-none"
        />

        <section className="flex gap-3">
          <button
            type="submit"
            className="rounded-md border border-zinc-50 px-4 py-1 text-lg text-zinc-50 transition-all hover:bg-zinc-50 hover:text-black"
          >
            Search
          </button>

          <button
            type="submit"
            className="rounded-md border border-zinc-50 px-4 py-1 text-lg text-zinc-50 transition-all hover:border-teal-500 hover:bg-teal-500"
          >
            Add
          </button>
        </section>
      </form>
    </article>
  );
}
