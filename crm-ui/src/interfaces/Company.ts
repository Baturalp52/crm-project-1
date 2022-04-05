import { IJob } from "./Job";

export interface ICompany {
  id: number;
  name: string;
  mapsCoord: { lat: number; lng: number };
  address?: string;
  city?: string;
  sector?: string;
  jobs?: IJob[];
  clientReference: string;
  contact: string;
  phone: string;
  mail: string;
  region: string;
  website: string;
}
