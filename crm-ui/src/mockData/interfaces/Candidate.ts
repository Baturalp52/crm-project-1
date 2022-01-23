import { IDepartment } from "./Department";
import { IHRMember } from "./HRMember";
import { IJob } from "./Job";
import { IKeyword } from "./Keyword";
import { ISkill } from "./Skills";

export interface ICandidate {
  id: number;
  name: string;
  surname: string;
  CVAddress?: string;
  phoneNumbers?: string[];
  emailAdresses?: string[];
  address?: string;
  extraAddress?: string;
  zipCode?: string;
  city?: string;
  country?: string;
  mapsCoord?: string;
  creatorMember?: IHRMember;
  previousJobs?: IJob[];
  skills?: ISkill[];
  comment?: string;
  salaryExpectation?: number;
  departments?: IDepartment[];
  keywords?: IKeyword[];
  situation?: "full-time" | "part-time" | "freelance" | "free";
}
