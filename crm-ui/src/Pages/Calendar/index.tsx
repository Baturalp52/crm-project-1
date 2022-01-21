import React, { useEffect } from "react";
import { pageRedux } from "../../redux";

const Calendar = () => {
  useEffect(() => {
    document.title = "Calendar || CRM";
    pageRedux.dispatch({
      type: "CHANGE_TITLE",
      payload: {
        title: "Calendar",
      },
    });
  });
  return <></>;
};

export default Calendar;
