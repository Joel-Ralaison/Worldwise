"use client";

import {
  useActiveCity,
  useCitiesDataStore,
  useSelected,
  type cityType,
} from "@/stores/citiesDataStore";
import { useEffect } from "react";

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

export default function CityItem() {
  const citiesData = useCitiesDataStore((store) => store.citiesData);

  const name = useActiveCity((store) => store.cityName);
  const lat = useActiveCity((store) => store.latitude);
  const lng = useActiveCity((store) => store.longitude);

  const selected = useSelected((store) => store.selected);
  const setSelected = useSelected((store) => store.setSelected);

  useEffect(() => {
    async function getCityInformation() {
      const userCitiesNames = citiesData.map((city) =>
        city.cityName.toUpperCase(),
      );

      if (userCitiesNames.includes(name.toUpperCase())) {
        const userCity = citiesData.filter((city) =>
          userCitiesNames.includes(name),
        );
        setSelected(userCity[0]);
        return;
      }

      const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
      const dt = await res.json();
    }

    getCityInformation();
  }, [lat, lng, name, citiesData, setSelected]);

  return (
    <article className="z-[18] flex h-full w-full flex-col items-center gap-3 p-4 text-zinc-200">
      <div className="flex w-full items-center gap-4">
        <h3 className="bg-gradient-to-r from-teal-500 to-teal-400 bg-clip-text text-2xl font-bold text-transparent">
          {selected?.cityName}
        </h3>
        <span>|</span>
        <p className="text-xl text-zinc-400">{selected?.countryCode}</p>
      </div>

      <textarea
        aria-label="description"
        name="desc"
        placeholder="Description ..."
        className="w-full flex-1 overflow-hidden rounded-md border border-gray-600 bg-gradient-to-r from-teal-500 from-5% to-emerald-50 to-100% bg-clip-text p-2 text-lg font-semibold text-transparent caret-teal-200 outline-none placeholder:font-normal focus-within:border-teal-700"
        draggable="false"
      />

      <button
        type="button"
        className="w-full max-w-[500px] rounded-md bg-teal-700 py-[10px] text-lg font-semibold transition-all ease-in-out hover:bg-teal-600 active:scale-[0.97]"
      >
        ADD TO YOUR VISITED CITIES
      </button>
    </article>
  );
}
