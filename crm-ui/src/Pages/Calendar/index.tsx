import React, { useEffect } from "react";
import { pageRedux } from "../../redux";

const Calendar = () => {
  useEffect(() => {
    pageRedux.dispatch({
      type: "CHANGE_TITLE",
      payload: {
        headerTitle: "Calendar",
        pageTitle: "Calendar || CRM",
      },
    });
  });
  return <></>;
};

export default Calendar;
