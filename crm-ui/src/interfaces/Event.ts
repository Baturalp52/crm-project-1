import { IHRMember } from "./HRMember";

export interface IEvent {
  id: number;
  title: string;
  start: Date | number;
  end: Date | number;
  desc?: string;
  allDay?: boolean;
  owner?: IHRMember;
}
