import React from 'react';
import { DatePicker } from '@mui/lab';
import { TextField } from '@mui/material';

const CalendarComponent = () => {
  return (
    <DatePicker
      label="Data de Nascimento"
      renderInput={(params) => <TextField {...params} />}
      openTo="year"
      views={['year', 'month', 'day']}
      inputFormat="dd/MM/yyyy"
    />
  );
};

export default CalendarComponent;
