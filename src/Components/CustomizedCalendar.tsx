import Calendar from "./CalendarWrapper";
import moment from "moment";

export const EVENT_STATUS_COLORS = {
  P: "#bee2fa",
  CI: "#c7edca",
};
export const events = [
  {
    start: moment("2024-07-25T10:00:00").toDate(),
    end: moment("2024-07-25T10:30:00").toDate(),
    title: "Standup Meeting",
  },
  {
    start: moment("2024-07-25T11:00:00").toDate(),
    end: moment("2024-07-25T11:30:00").toDate(),
    title: (
      <>
        <b>Product Meeting</b>
      </>
    ), // JSX
  },
];

const CustomizedCalendar = () => {
  return (
    <>
      <Calendar
        events={events}
        formats={{
          dayHeaderFormat: (date) => moment(date).format("dddd @ DD"), // to change specific view format
        }}
      />
    </>
  );
};

export default CustomizedCalendar;
