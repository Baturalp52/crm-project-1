import { ICandidate } from "./Candidate";
import { ITask } from "./Task";

export interface IHRMember {
  id: number;
  name: string;
  surname: string;
  tasks?: ITask[];
  candidatesCreated?: ICandidate[];
}
