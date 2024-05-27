"use client";

import {
  useActiveActionStore,
  useCityManagerStore,
} from "@/stores/cityManagerStore";

import AddCityPage from "./AddCityPage";
import CitiesListPage from "./CitiesListPage";
import CityItem from "@/components/CityManager/CityItem";
import { useSearchStore } from "@/stores/searchStore";

export default function ContentAction() {
  const managerOpen = useCityManagerStore((store) => store.managerOpen);
  const action = useActiveActionStore((store) => store.action);
  const showSearch = useSearchStore((store) => store.showSearch);

  if (!managerOpen) return <></>;

  return (
    <article className="h-[calc(100%-50px)] w-full overflow-hidden rounded-md bg-black/5 backdrop-blur-[1px]">
      {showSearch && <CityItem />}
      {!showSearch && action === "add" && <AddCityPage />}
      {!showSearch && action === "list" && <CitiesListPage />}
    </article>
  );
}
