import { IHRMember } from "./HRMember";
import { IJob } from "./Job";

export interface ICompany {
  id: number;
  name: string;
  address?: string;
  city?: string;
  sector?: string;
  HRMembers?: IHRMember[];
  jobs?: IJob[];
}
