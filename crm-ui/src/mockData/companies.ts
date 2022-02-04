import { ICompany } from "../interfaces/Company";

const companies: ICompany[] = [
  {
    id: 1,
    name: "Company Ankara",
    city: "Ankara",
    mapsCoord: {
      lat: 39.925533,
      lng: 32.866287,
    },
  },
  {
    id: 2,
    name: "Company Paris",
    city: "Paris",
    mapsCoord: {
      lat: 48.864716,
      lng: 2.349014,
    },
  },
  {
    id: 3,
    name: "Company London",
    city: "London",
    mapsCoord: {
      lat: 51.509865,
      lng: -0.118092,
    },
  },
  {
    id: 4,
    name: "Company New York",
    city: "New York",
    mapsCoord: {
      lat: 40.73061,
      lng: -73.935242,
    },
  },
  {
    id: 5,
    name: "Company Berlin",
    city: "Berlin",
    mapsCoord: {
      lat: 52.520008,
      lng: 13.404954,
    },
  },
];

export default companies;
