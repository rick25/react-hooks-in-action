import React, { useReducer } from "react";
import reducer from "./weekReducer";
import { getWeek } from "../../utils/date-wrangler";

const WeekPicker = ({ date }) => {
  const [week, dispatch] = useReducer(reducer, date, getWeek);
  return (
    <p className="datePicker">
      <button className="btn" onClick={() => dispatch({ type: "PREV_WEEK" })}>
        {"< "}Anterior
      </button>
      <button className="btn" onClick={() => dispatch({ type: "TODAY" })}>
        Hoy
      </button>
      <button className="btn" onClick={() => dispatch({ type: "NEXT_WEEK" })}>
        Siguiente{" >"}
      </button>
      {week.start.toDateString()} - {week.end.toDateString()}
    </p>
  );
};

export default WeekPicker;
