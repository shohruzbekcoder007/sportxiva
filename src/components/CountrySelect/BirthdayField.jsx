import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function BirthdayField(props) {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      sx={{ width: 300 }}
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      />
  );
}