import React, { useEffect, useState } from "react";
import { pageRedux } from "../../redux";
import moment from "moment";

import { IEvent } from "../../interfaces/Event";

import {
  Calendar as CalendarComponent,
  momentLocalizer,
  Views,
} from "react-big-calendar";
import { Box, Paper } from "@mui/material";
import EventModal from "./EventModal";
import useSWR from "swr";
import Loading from "../../components/Loading";

const localizer = momentLocalizer(moment);
const Calendar = () => {
  const { data, error } = useSWR("events");

  const [isEventModalOpen, setIsEventModalOpen] = useState<boolean>(false);
  const [eventModalEvent, setEventModalEvent] = useState<IEvent | undefined>(
    undefined
  );
  const [eventsData, setEventsData] = useState<IEvent[]>(data);

  useEffect(() => {
    setEventsData(data);
  }, [data]);

  useEffect(() => {
    pageRedux.dispatch({
      type: "CHANGE_TITLE",
      payload: {
        title: "calendar",
      },
    });
  });

  if (error) return <div>{error}</div>;
  if (!data) return <React.Suspense fallback={<Loading />} />;
  return (
    <>
      <EventModal
        event={eventModalEvent}
        isOpen={isEventModalOpen}
        setIsOpen={setIsEventModalOpen}
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
            events={eventsData}
            defaultView={Views.MONTH}
            startAccessor="start"
            endAccessor="end"
            toolbar={false}
            style={{ height: 500 }}
            views={{
              month: true,
            }}
            onSelectEvent={(event) => {
              setEventModalEvent(event);
              setIsEventModalOpen(true);
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
              setEventModalEvent(newEvent);
              setIsEventModalOpen(true);
            }}
          />
        </Box>
      </Paper>
    </>
  );
};

export default Calendar;
