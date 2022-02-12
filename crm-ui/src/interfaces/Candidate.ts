import { IHRMember } from "./HRMember";
import { ISkill } from "./Skill";

export interface ICandidate {
  id: number;
  name: string;
  surname: string;
  CVAddress: string;
  phoneNumbers: string[];
  emailAdresses: string[];
  address: string;
  extraAddress: string;
  zipCode: string;
  city: string;
  country: string;
  mapsCoord?: { lat: number; lng: number };
  creatorMember?: IHRMember | {};
  previousJobs: string[];
  skills: ISkill[];
  comment: string;
  salaryExpectation: number;
  departments: string[];
  keywords: string[];
  diplomas: string[];
}
