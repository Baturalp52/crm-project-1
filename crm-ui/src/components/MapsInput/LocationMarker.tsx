import React, { useMemo, useRef } from "react";
import { Marker, useMapEvents } from "react-leaflet";

const LocationMarker = (props: any) => {
  const { position, setPosition } = props;
  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng);
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
          setPosition(marker.getLatLng());
        }
      },
    }),
    [setPosition]
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
