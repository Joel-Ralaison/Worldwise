"use client";

import {
  useActiveActionStore,
  useCityManagerStore,
} from "@/utils/cityManagerStore";

import AddCityPage from "./AddCityPage";
import CitiesListPage from "./CitiesListPage";

export default function ContentAction() {
  const managerOpen = useCityManagerStore((store) => store.managerOpen);
  const action = useActiveActionStore((store) => store.action);

  if (!managerOpen) return <></>;

  return (
    <article className="h-[calc(100%-50px)] w-full overflow-hidden rounded-md bg-black/5 backdrop-blur-[1px]">
      {action === "add" ? <AddCityPage /> : <CitiesListPage />}
    </article>
  );
}
