import { IHRMember } from "./HRMember";
import { IJob } from "./Job";
import { ISkill } from "./Skill";
import { ITask } from "./Task";

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
  jobs: string[];
  mobility: string[];
  skills: ISkill[];
  comment: string;
  salaryExpectation: number;
  departments: string[];
  keywords: string[];
  diplomas: string[];
  placedJob?: IJob;
  situation: boolean;
  tasks?: ITask[];
}
