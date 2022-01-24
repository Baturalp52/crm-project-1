import { defaultAxiosInstance } from "../../axios";

export type coord = { lat: number; lng: number };

export const getDistanceBetween2Coords = async (
  coord1: coord,
  coord2: coord
) => {
  const requestUrl = `https://routing.openstreetmap.de/routed-foot/route/v1/driving/${coord1.lng.toFixed(
    5
  )},${coord1.lat.toFixed(5)};${coord2.lng.toFixed(5)},${coord2.lat.toFixed(
    5
  )}?overview=false&geometries=polyline&steps=false`;

  var distance = 0;

  await defaultAxiosInstance.get(requestUrl).then((e) => {
    distance = e.data.routes[0].distance;
  });
  console.log(distance);

  return distance;
};
