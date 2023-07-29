import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { milliy_registr } from '../../utils/API_urls';
import { countryName } from './requests';

export default function SportSelector(props) {

  const [countries, setCountries] = useState([])
  const [contId, setCountId] = useState(0)

  useEffect(() => {
    countryName(milliy_registr, (response) => {
      setCountries(response.data)
      if(response.data[0]?.id){
        props.getImages(response.data)
      }
      // setCountId
    }, (error) => {
      console.log(error)
    })
  }, [])

  useEffect(() => {
    if(contId !== 0){
      countryName(milliy_registr + `?id=${contId}`, (response) => {
        props.getImages(response.data)
      }, (error) => {
        console.log(error)
      })
    }
  }, [contId])

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
      onChange={(event, newValue) => {
        setCountId(newValue.id);
        props.setCountId(newValue.id)
      }}
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