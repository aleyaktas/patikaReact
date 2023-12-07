import React from "react";
import { useWeather } from "../../context/Weather";

// Component for a selectable days dropdown.
const DaysSelectBox = () => {
  // List of days
  const days = [1, 2, 3, 4, 5, 6, 7, 14];

  const { handleDaysChange } = useWeather();

  return (
    <select onChange={(e) => handleDaysChange(e)}>
      {/* Maps through the list of days, creating an option for each day. */}
      {days.map((day, index) => (
        <option key={index} value={day}>
          {day}
        </option>
      ))}
    </select>
  );
};

export default DaysSelectBox;
