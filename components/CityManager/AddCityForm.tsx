"use client";

import { useEffect, useRef } from "react";
import { useSearchStrore } from "@/stores/searchStore";
import { clsx } from "clsx";
import { useActiveCity } from "@/stores/citiesDataStore";

const API_KEY = "eead9f0bcaa1fd7ab52ef11e3f4f7bc1";
const OPENWEATHER_URL = "https://api.openweathermap.org/geo/1.0/direct";

export default function AddCityForm() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const search = useSearchStrore((store) => store.currentSearch);
  const setSearch = useSearchStrore((store) => store.setCurrentSearch);
  const setShowSearch = useSearchStrore((store) => store.setShowSearch);
  const setActiveCity = useActiveCity((store) => store.setActiveCity);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  async function getPosition() {
    const locationRes = await fetch(
      `${OPENWEATHER_URL}?q=${search}&appid=${API_KEY}`,
    );
    const location = await locationRes.json();
    const data = await location[0];
    setActiveCity(data.name, data.lat, data.lon);
  }

  return (
    <form
      className="flex h-full w-[50%] flex-col items-center justify-center gap-4 bg-teal-600 lg:gap-10"
      onSubmit={(e) => {
        e.preventDefault();
        if (!search) return;
        setShowSearch(true);
      }}
    >
      <h5 className="text-2xl font-bold leading-tight text-white lg:text-3xl 2xl:text-4xl">
        NEW CITY
      </h5>

      <div className="flex h-[40px] w-[75%] max-w-[250px] border-b border-white">
        <input
          type="text"
          aria-label="cityName"
          name="cityName"
          placeholder="City name..."
          className="h-full w-full flex-1  bg-clip-text pl-2 text-lg text-zinc-50 placeholder-zinc-300 caret-white outline-none placeholder:font-normal lg:text-xl 2xl:text-2xl"
          ref={inputRef}
          value={search}
          onChange={(e) => {
            getPosition();
            setSearch(e.target.value);
          }}
        />

        <div className="flex h-full w-[10%] items-center justify-center">
          {search && (
            <button
              type="button"
              onClick={() => {
                setSearch("");
                inputRef.current?.focus();
              }}
            >
              ❎
            </button>
          )}
        </div>
      </div>

      <button
        type="submit"
        className={clsx(
          "rounded-md border px-4 py-1 text-lg text-zinc-50 transition-all max-md:py-[2px] lg:px-8 lg:py-[6px] lg:text-xl",
          search
            ? "border-emerald-400 bg-emerald-400 text-zinc-950 shadow-lg shadow-black/15 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white"
            : "cursor-not-allowed border-zinc-50",
        )}
        onClick={() => {
          if (!search) {
            inputRef.current?.focus();
          }
        }}
      >
        Search
      </button>
    </form>
  );
}
