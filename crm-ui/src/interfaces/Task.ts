import { ICandidate } from "./Candidate";
import { IComment } from "./Comment";
import { IHRMember } from "./HRMember";

export interface ITask {
  id: number;
  name: string;
  description?: string;
  assignedMember?: IHRMember | "global";
  assignedCandidate?: ICandidate;
  comments?: IComment[];
  situation: "on-progress" | "completed" | "closed" | "open";
  createdDate?: Date;
  endDate?: Date | undefined;
}
