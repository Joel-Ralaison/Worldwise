import { create } from "zustand";

export type cityType = {
  cityName: string;
  countryCode: string;
  position: { lat: number; lng: number };
};

const initialData: cityType[] = [
  {
    cityName: "Paris",
    countryCode: "FR",
    position: { lat: 40.123456, lng: 6.12346 },
  },
  {
    cityName: "Madrid",
    countryCode: "SPA",
    position: { lat: 41.123456, lng: 5.12346 },
  },
  {
    cityName: "Berlin",
    countryCode: "GER",
    position: { lat: 42.123456, lng: 2.12346 },
  },
];

interface ICityStore {
  citiesData: cityType[];
  addCity: (newCity: cityType) => void;
  deleteCity: (cityName: string) => void;
}

export const useCitiesDataStore = create<ICityStore>((set) => ({
  citiesData: initialData,
  addCity: (newCity: cityType) =>
    set(function (state) {
      if (
        state.citiesData.map((city) => city.cityName).includes(newCity.cityName)
      )
        return state;
      return { citiesData: [...state.citiesData, newCity] };
    }),

  deleteCity: (cityName: string) =>
    set((state) => ({
      citiesData: state.citiesData.filter((city) => city.cityName !== cityName),
    })),
}));

export const useActiveCity = create<{
  cityName: string;
  latitude: number;
  longitude: number;
  setActiveCity: (newName: "", newLat: number, newLng: number) => void;
}>((set) => ({
  cityName: "",
  latitude: 0,
  longitude: 0,
  setActiveCity: (newName, newLat, newLng) =>
    set({ cityName: newName, latitude: newLat, longitude: newLng }),
}));

export const useSelected = create<{
  selected: cityType;
  setSelected: (newCity: cityType) => void;
}>((set) => ({
  selected: { cityName: "", countryCode: "", position: { lat: 0, lng: 0 } },
  setSelected: (newCity) =>
    set({
      selected: {
        cityName: newCity.cityName,
        countryCode: newCity.countryCode,
        position: newCity.position,
      },
    }),
}));
