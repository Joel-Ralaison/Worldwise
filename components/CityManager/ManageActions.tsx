"use client";

import { useCityManagerStore } from "@/utils/cityManagerStore";

import AddCity from "@/components/CityManager/AddCity";
import Cities from "@/components/CityManager/Cities";
import {
  HideCityManager,
  ShowCityManager,
} from "@/components/CityManager/CityManagerToogler";

export default function ManageActions() {
  const managerOpen = useCityManagerStore((store) => store.managerOpen);

  if (!managerOpen) return <ShowCityManager />;

  return (
    <>
      <div className="relative flex w-full justify-start gap-2">
        <AddCity />
        <Cities />
        <HideCityManager />
      </div>
    </>
  );
}
