import React, { useMemo, useRef } from "react";
import { Marker, useMapEvents } from "react-leaflet";

const LocationMarker = (props: any) => {
  const { position, callBackFn } = props;
  const map = useMapEvents({
    click(e) {
      callBackFn(e.latlng);
    },
  });
  // ignore this line
  if (false) console.log(map);
  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current as any;
        if (marker != null) {
          callBackFn(marker.getLatLng());
        }
      },
    }),
    [callBackFn]
  );
  return (
    <>
      {position && (
        <Marker
          ref={markerRef}
          eventHandlers={eventHandlers}
          draggable
          position={position}
        />
      )}
    </>
  );
};

export default LocationMarker;
