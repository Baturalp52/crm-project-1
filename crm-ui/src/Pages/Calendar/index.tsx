import React, { useEffect, useState } from "react";
import { pageRedux } from "../../redux";
import moment from "moment";

import { events } from "../../mockData/events";
import { IEvent } from "../../mockData/interfaces/Event";

import {
  Calendar as CalendarComponent,
  momentLocalizer,
  Views,
} from "react-big-calendar";
import { Box, Paper } from "@mui/material";
import RightBar from "./RightBar";

const localizer = momentLocalizer(moment);
const Calendar = () => {
  const [isRightBarOpen, setIsRightBarOpen] = useState<boolean>(false);
  const [rightBarEvent, setRightBarEvent] = useState<IEvent | undefined>(
    undefined
  );
  useEffect(() => {
    pageRedux.dispatch({
      type: "CHANGE_TITLE",
      payload: {
        headerTitle: "Calendar",
        pageTitle: "Calendar || CRM",
      },
    });
  });
  return (
    <>
      <RightBar
        event={rightBarEvent}
        isOpen={isRightBarOpen}
        setIsOpen={setIsRightBarOpen}
      />
      <Paper
        sx={{
          width: "calc(100% - 40px)",
          marginLeft: "auto",
          overflow: "hidden",
          boxShadow: "none",
        }}
      >
        <Box padding={2}>
          <CalendarComponent
            selectable
            popup
            localizer={localizer}
            events={events}
            step={15}
            timeslots={8}
            defaultView={Views.MONTH}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            views={{
              month: true,
            }}
            onSelectEvent={(event) => {
              setRightBarEvent(event);
              setIsRightBarOpen(true);
            }}
            onSelectSlot={(event) => {
              const newEvent = {
                id: 0,
                title: "",
                desc: "",
                allDay: false,
                start: new Date(event.start),
                end: new Date(event.end),
              };
              setRightBarEvent(newEvent);
              setIsRightBarOpen(true);
            }}
          />
        </Box>
      </Paper>
    </>
  );
};

export default Calendar;
