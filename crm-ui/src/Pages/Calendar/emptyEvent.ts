const now = new Date();
export const emptyEvent = {
  id: 0,
  title: "",
  start: now.getTime() - 1000 * 60 * 60 * 24,
  end: now,
  desc: "",
  allDay: false,
};
