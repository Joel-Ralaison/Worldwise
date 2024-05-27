"use client";

import { useCitiesDataStore } from "@/stores/citiesDataStore";
import { useSearchStore } from "@/stores/searchStore";
import { useEffect, useRef, useState } from "react";

export default function CitiesListPage() {
  const citiesData = useCitiesDataStore((store) => store.citiesData);
  const deleteCity = useCitiesDataStore((store) => store.deleteCity);
  const setShowSearch = useSearchStore((store) => store.setShowSearch);
  const setSearch = useSearchStore((store) => store.setCurrentSearch);

  const inputRef = useRef<HTMLInputElement>(null);
  const [filterValue, setFilterValue] = useState<string>("");

  let filteredData = citiesData.filter((city) =>
    city.cityName.toUpperCase().includes(filterValue.toUpperCase()),
  );

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  function handleDelete(cityName: string) {
    deleteCity(cityName);
  }

  return (
    <article className="z-[17] flex h-full w-full flex-col justify-between gap-3 p-2">
      <h4 className="w-fit bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-xl font-bold text-transparent">
        <span>Tracked Cities | </span>
        <span>{filteredData.length}</span>
      </h4>

      <ul className="flex flex-1 flex-col overflow-y-auto rounded-lg border border-gray-700 text-lg">
        {filteredData.map((city) => (
          <li
            key={city.cityName}
            className="group flex h-[40px] w-full cursor-pointer justify-between from-emerald-800 to-teal-800 px-2 text-base odd:bg-black/30 hover:bg-gradient-to-r max-sm:text-sm"
          >
            <div
              className="flex h-full flex-1 items-center"
              onClick={() => {
                setSearch(city.cityName);
                setShowSearch(true);
              }}
            >
              <p className="w-1/2 text-zinc-100">{city.cityName}</p>
              <p className="w-1/2 text-zinc-400">{city.countryCode}</p>
            </div>

            <button
              type="button"
              className="opacity-100 md:opacity-0 md:group-hover:opacity-100"
              onClick={() => handleDelete(city.cityName)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      <div className="flex h-[35px] w-full overflow-hidden rounded-md border border-gray-700 focus-within:border-teal-500">
        <input
          type="text"
          aria-label="city-search"
          placeholder="City name..."
          className="h-full w-[90%] border-none bg-transparent pl-2 text-teal-200 outline-none placeholder:text-gray-500 focus-within:placeholder:text-teal-600"
          ref={inputRef}
          value={filterValue}
          onChange={(e) => {
            setFilterValue(e.target.value);
          }}
        />

        <div className="flex h-full w-[10%] items-center justify-center">
          {filterValue && (
            <button
              type="button"
              onClick={() => {
                setFilterValue("");
                inputRef.current?.focus();
              }}
            >
              ❌
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
