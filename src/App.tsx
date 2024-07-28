import React from "react";
import logo from "./logo.svg";
import "./App.css";
import BasicCalendar from "./Components/BasicCalendar";
import ControlledCalendar from "./Components/ControlledCalendar";
import CustomizedCalendar from "./Components/CustomizedCalendar";
import AdvancedCalendar from "./Components/AdvancedCalendar";

function App() {
  return (
    <div style={{ height: "95vh" }}>
      {/* <BasicCalendar /> */}
      {/* <ControlledCalendar /> */}
      {/* <CustomizedCalendar /> */}
      <AdvancedCalendar />
    </div>
  );
}

export default App;
