import { IHRMember } from "./HRMember";

export interface ITask {
  id: number;
  name: string;
  description?: string;
  assignedMember?: IHRMember;
  situation: "on-progress" | "completed" | "closed" | "open";
}
