import { IHRMember } from "./HRMember";

export interface ITask {
  id: number;
  name: string;
  description?: string;
  assignedMember?: IHRMember;
  situation: "in-progress" | "completed" | "closed" | "open";
}
