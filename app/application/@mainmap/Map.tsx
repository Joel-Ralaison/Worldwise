"use client";

import { useState } from "react";
import "leaflet-defaulticon-compatibility";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { LatLngExpression, LeafletMouseEvent } from "leaflet";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
  ZoomControl,
} from "react-leaflet";

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

export default function Map() {
  const [mapPosition, setMapPosition] = useState<LatLngExpression>([
    51.505, -0.09,
  ]);

  return (
    <MapContainer
      center={mapPosition}
      zoom={13}
      scrollWheelZoom={true}
      className="z-10 h-full w-full overflow-hidden border-none outline-none"
      zoomControl={false}
    >
      <TileLayer
        attribution='<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={mapPosition}>
        <Popup>
          {"City"}
          <br />
          {"Country"}
        </Popup>
      </Marker>

      <ZoomControl position="bottomleft" />

      <CenterMap position={mapPosition} />
      <DetectClick />
    </MapContainer>
  );
}

function CenterMap(props: { position: LatLngExpression }) {
  const map = useMap();
  map.setView(props.position);
  return null;
}

function DetectClick() {
  useMapEvent("click", (e: LeafletMouseEvent) => {
    console.log("latitude detected : ", e.latlng.lat);
    console.log("longitude detected : ", e.latlng.lng);
    fetch(`${BASE_URL}?latitude=${e.latlng.lat}&longitude=${e.latlng.lng}`);
  });
  return null;
}
