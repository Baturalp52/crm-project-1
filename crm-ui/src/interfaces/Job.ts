import { ICompany } from "./Company";

export interface IJob {
  id: number;
  name: string;
  experience?: number;
  salaryExpectation?: number;
  studyFields?: string[];
  company?: ICompany;
}
