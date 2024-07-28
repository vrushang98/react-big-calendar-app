import Calendar from "./CalendarWrapper";
import moment from "moment";

const events = [
  {
    start: moment("2024-07-25T10:00:00").toDate(),
    end: moment("2024-07-25T10:30:00").toDate(),
    title: "Standup Meeting",
  },
];

const BasicCalendar = () => {
  return (
    <>
      <Calendar events={events} />
    </>
  );
};

export default BasicCalendar;
