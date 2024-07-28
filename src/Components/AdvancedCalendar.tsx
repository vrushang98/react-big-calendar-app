import { ReactElement, JSXElementConstructor, ReactNode } from "react";
import Calendar from "./CalendarWrapper";
import moment from "moment";
import { Components, EventProps } from "react-big-calendar";

const events = [
  {
    start: moment("2024-07-28T10:00:00").toDate(),
    end: moment("2024-07-28T10:30:00").toDate(),
    title: "Standup Meeting",
    data: {
      type: "Required",
    },
  },
  {
    start: moment("2024-07-28T11:00:00").toDate(),
    end: moment("2024-07-28T11:30:00").toDate(),
    title: (
      <>
        <b>Product Meeting</b>
      </>
    ), // JSX
    data: {
      type: "Optional",
    },
  },
];

interface CustomEvent extends Event {
  data: any;
}

const CustomComponents = {
  event: (props: EventProps<Event>) => {
    const eventType = props?.event?.type ?? "";
    return (
      <div style={{ background: "green", color: "white" }}>{props?.title}</div>
    );
  },
};

const AdvancedCalendar = () => {
  return (
    <>
      <Calendar events={events} />
    </>
  );
};

export default AdvancedCalendar;
