import React, { useState } from "react";
import { LatLngExpression } from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import { Card, CardContent, CardHeader } from "@mui/material";
import { useTranslation } from "react-i18next";
import calculateDistance from "../../helpers/calculateDistance";

interface IMapsInput {
  mainCoords: LatLngExpression | { lat: number; lng: number };
  secondCoord?: LatLngExpression | { lat: number; lng: number };
  setCoord: (coord: any) => void;
  isMainMoving?: boolean;
}

const MapsInput = (props: IMapsInput) => {
  const { mainCoords, secondCoord, isMainMoving, setCoord } = props;
  const { t } = useTranslation("components", { keyPrefix: "mapsInput" });
  const [selectionCoords, setSelectionCoords] = useState<any>(
    secondCoord || mainCoords
  );
  const [distance, setDistance] = useState<number | string>(0);

  return (
    <Card sx={{ m: 1 }}>
      {!isMainMoving && <CardHeader title={`${distance} ${t("title")}`} />}
      <CardContent>
        <MapContainer
          center={mainCoords}
          zoom={12}
          id="map"
          style={{ height: "400px", width: "100%", color: "black" }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution=""
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {Boolean(mainCoords && !isMainMoving) && (
            <Marker position={mainCoords} />
          )}
          <LocationMarker
            position={selectionCoords}
            callBackFn={(coords: any) => {
              if (coords) {
                const dist = calculateDistance(mainCoords as any, coords);
                console.log(coords, mainCoords, dist);

                setDistance(dist.toFixed(3));
                setSelectionCoords(coords);
                setCoord(coords);
              }
            }}
          />
        </MapContainer>
      </CardContent>
    </Card>
  );
};

export default MapsInput;
