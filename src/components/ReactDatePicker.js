import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";

function ReactDatePicker() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <>
    <div className="w-full">
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="dd/mm/yyyy"
        isClearable
        className="border border-gray-400 shadow p-1 rounded-md w-96 focus:outline-none focus:border-blue-500"
      />
      </div>
    </>
  );
}

export default ReactDatePicker;
