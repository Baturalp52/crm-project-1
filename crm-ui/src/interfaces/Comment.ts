import { IHRMember } from "./HRMember";

export interface IComment {
  id: number;
  content: string;
  owner?: IHRMember;
  createdDate?: Date;
}
