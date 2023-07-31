import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function BasicDatePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} sx={{width: "100%"}}>
      <DemoContainer components={['DatePicker']} sx={{width: "300px", '&.MuiInputBase-root': {width: "100%"}}}>
        <DatePicker sx={{width: "100%"}} label="sana" />
      </DemoContainer>
    </LocalizationProvider>
  );
}