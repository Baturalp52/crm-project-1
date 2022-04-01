// react
import React, { useState } from "react";
// react-leaflet
import { MapContainer, Marker, TileLayer } from "react-leaflet";
// components
import LocationMarker from "./LocationMarker";
// @mui
import { Card, CardContent, CardHeader } from "@mui/material";
// react-i18next
import { useTranslation } from "react-i18next";
// helpers
import calculateDistance from "../../helpers/calculateDistance";
// formik
import { useFormikContext } from "formik";

interface IMapsInput {
  name: string;
  isMainMoving?: boolean;
}

const MapsInput = (props: IMapsInput) => {
  const { name, isMainMoving } = props;
  const { t } = useTranslation("components", { keyPrefix: "mapsInput" });

  const { values, setFieldValue } = useFormikContext();

  const mainCoords = (values as any)[name];
  const [selectionCoords, setSelectionCoords] = useState<any>(mainCoords);
  const [distance, setDistance] = useState<number | string>(0);

  const setCoord = (coord: any) => {
    setFieldValue(name, coord);
  };

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
