import { ICandidate } from "./Candidate";
import { IComment } from "./Comment";
import { ITask } from "./Task";

export interface IHRMember {
  id: number;
  name: string;
  surname: string;
  tasks?: ITask[];
  candidatesCreated?: ICandidate[];
  comments?: IComment[];
}
