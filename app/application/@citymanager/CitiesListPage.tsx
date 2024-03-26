const data = [
  { name: "Antananarivo", country: "Madagascar" },
  { name: "Berlin", country: "Germany" },
  { name: "New York", country: "United State" },
  { name: "Lisbon", country: "Portugal" },
  { name: "Madrid", country: "Spain" },
  { name: "Munich", country: "Germany" },
  { name: "Paris", country: "France" },
];

export default function CitiesListPage() {
  return (
    <article className="flex h-full w-full flex-col justify-between gap-3 p-2">
      <h4 className="bg-gradient-to-r from-emerald-400 to-teal-100 bg-clip-text text-xl font-bold text-transparent">
        <span>Cities you tracked | </span>
        <span>{data.length}</span>
      </h4>

      <ul className="flex flex-1 flex-col overflow-y-auto rounded-lg border border-teal-500 text-lg">
        {data.map((city) => (
          <li
            key={city.name}
            className="group flex w-full cursor-pointer justify-between from-emerald-800 to-teal-800 px-2 py-2 text-base odd:bg-black/30 hover:bg-gradient-to-r max-sm:text-sm"
          >
            <div className="flex flex-1 items-center">
              <p className="w-1/2 text-zinc-100">{city.name}</p>
              <p className="w-1/2 text-zinc-400">{city.country}</p>
            </div>

            <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100">
              ❌
            </div>
          </li>
        ))}
      </ul>

      <div className="flex h-[35px] w-full overflow-hidden rounded-md border border-teal-500">
        <input
          type="text"
          aria-label="city-search"
          placeholder="City name..."
          className="h-full w-[75%] bg-transparent pl-2 text-teal-200 placeholder:text-teal-600"
        />

        <button
          type="button"
          className="flex h-full w-[25%] items-center justify-center bg-teal-800 text-zinc-100 transition-colors hover:bg-teal-500 hover:text-white"
        >
          Search
        </button>
      </div>
    </article>
  );
}
