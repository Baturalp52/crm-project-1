import React, { useEffect, useState } from "react";
import { LatLngExpression } from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import { coord, getDistanceBetween2Coords } from "./helpers";
import { Card, CardContent, CardHeader } from "@mui/material";

interface IMapsInput {
  mainCoords: LatLngExpression;
}

const MapsInput = (props: IMapsInput) => {
  const { mainCoords } = props;
  const [selectionCoords, setSelectionCoords] = useState<any>(null);
  const [distance, setDistance] = useState<number | string>(0);
  useEffect(() => {
    if (selectionCoords)
      getDistanceBetween2Coords(mainCoords as coord, selectionCoords).then(
        (e) => {
          setDistance((e / 1000).toFixed(3));
        }
      );
  }, [selectionCoords, mainCoords, setDistance]);

  return (
    <Card sx={{ m: 1 }}>
      <CardHeader title={`${distance} km(s) between the point.`} />
      <CardContent>
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
          <Marker position={mainCoords} />
          <LocationMarker
            position={selectionCoords}
            setPosition={setSelectionCoords}
          />
        </MapContainer>
      </CardContent>
    </Card>
  );
};

export default MapsInput;
