import { IEvent } from "../interfaces/Event";

const now = new Date();

export const events: IEvent[] = [
  {
    id: 0,
    title: "All Day Event very long title",
    allDay: true,
    start: new Date(2022, 0, 1),
    end: new Date(2022, 0, 1),
  },
  {
    id: 1,
    title: "Long Event",
    start: new Date(2022, 0, 7),
    end: new Date(2022, 0, 8),
  },

  {
    id: 2,
    title: "DTS STARTS",
    start: new Date(2022, 0, 20, 13, 0, 0),
    end: new Date(2022, 0, 20, 15, 0, 0),
  },

  {
    id: 3,
    title: "DTS ENDS",
    start: new Date(2022, 0, 13, 0, 0, 0),
    end: new Date(2022, 0, 13, 15, 0, 0),
  },

  {
    id: 4,
    title: "Some Event",
    start: new Date(2022, 0, 9, 0, 0, 0),
    end: new Date(2022, 0, 10, 0, 0, 0),
  },
  {
    id: 5,
    title: "Conference",
    start: new Date(2022, 0, 13),
    end: new Date(2022, 0, 13),
    desc: "Big conference for important people",
  },
  {
    id: 5,
    title: "Conference",
    start: now.getTime() - 1000 * 60 * 60 * 24,
    end: now,
    desc: "Big conference for important people",
  },
];
