"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import "leaflet-defaulticon-compatibility";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
  ZoomControl,
} from "react-leaflet";
import { LeafletMouseEvent } from "leaflet";

export default function Map() {
  const [mapPosition, setMapPosition] = useState<[number, number]>([
    51.505, -0.09,
  ]);

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={true}
      className="z-10 h-full w-full overflow-hidden border-none outline-none"
      zoomControl={false}
    >
      <TileLayer
        attribution='<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[51.505, -0.09]}>
        <Popup>
          {"City"}
          <br />
          {"Country"}
        </Popup>
      </Marker>

      <ZoomControl position="bottomleft" />

      <CenterMap position={[51.505, -0.09]} />
      <DetectClick />
    </MapContainer>
  );
}

function CenterMap(props: { position: [number, number] }) {
  const map = useMap();
  map.setView(props.position);
  return null;
}

function DetectClick() {
  useMapEvent("click", (e: LeafletMouseEvent) => {
    // router.push(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    console.log(e.latlng.lat);
    console.log(e.latlng.lng);
  });

  return null;
}
