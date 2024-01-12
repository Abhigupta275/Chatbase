import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";

function ReactDatePicker() {
  // const [selectedDate, setSelectedDate] = useState(null);

  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // };

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
    // If end date is before the new start date, reset end date
    if (endDate && date > endDate) {
      setEndDate(null);
    }
  };

  const handleEndDateChange = (date) => {
    // If end date is before the start date, don't update
    if (startDate && date < startDate) {
      return;
    }
    setEndDate(date);
  };

  const dateSeparator = ' ~ ';

  return (
    <>
      <div className="w-full flex">
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          isClearable
          placeholderText="Start Date"
          className="border border-gray-400 shadow p-1.5 w-52 focus:outline-none focus:border-blue-500"
        />
        {dateSeparator}
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          isClearable
          placeholderText="End Date"
          className="border border-gray-400 shadow p-1.5 w-52 focus:outline-none focus:border-blue-500"
        />
      </div>
    </>
  );
}

export default ReactDatePicker;
