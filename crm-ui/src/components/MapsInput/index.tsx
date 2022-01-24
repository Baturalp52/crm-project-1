import React, { useState } from "react";
import { LatLngExpression } from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import LocationMarker from "./LocationMarker";

interface IMapsInput {
  mainCoords: LatLngExpression;
}

const MapsInput = (props: IMapsInput) => {
  const { mainCoords } = props;
  const [selectionCoords, setSelectionCoords] = useState<any>(null);

  return (
    <MapContainer
      center={mainCoords}
      zoom={16}
      id="map"
      style={{ height: "400px", width: "100%", color: "black" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution=""
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={mainCoords}></Marker>
      <LocationMarker
        position={selectionCoords}
        setPosition={setSelectionCoords}
      />
    </MapContainer>
  );
};

export default MapsInput;
