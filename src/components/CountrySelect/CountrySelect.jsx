import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { country_name } from '../../utils/API_urls';
import { countryName } from './requests';

export default function CountrySelect(props) {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    countryName(country_name, (response) => {
      setCountries(response.data)
    }, (error) => {
      console.log(error)
    })
  }, [])

  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: 300 }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.name}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          {option.name}
        </Box>
      )}
      // onChange={(event, newValue) => {
      //   props.setCountId1(newValue.id)
      // }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={props?.title}
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}