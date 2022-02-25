import { IHRMember } from "./HRMember";
import { ITask } from "./Task";

export interface IComment {
  id: number;
  content: string;
  owner: IHRMember;
  createdDate?: Date;
  task?: ITask;
}
