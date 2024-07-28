import Calendar from "./CalendarWrapper";
import moment from "moment";

const events = [
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

const ControlledCalendar = () => {
  return (
    <>
      <Calendar
        events={events}
        defaultView={"month"}
        views={["month", "week", "day"]}
        // date={moment("2022-10-10").toDate()}
        // toolbar={false}
        min={moment().startOf("day").hour(8).minute(0).toDate()} // sets minimum working hours
        max={moment().startOf("day").hour(18).minute(0).toDate()} // sets maximum working hours
      />
    </>
  );
};

export default ControlledCalendar;
