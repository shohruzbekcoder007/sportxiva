
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function GenderSelector(props) {

  

  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: 300 }}
      options={[
        {
          name : 'Erkak',
          id: 'male'

        },
        {
          name : 'Ayol',
          id: 'Female'

        }
      ]}
      autoHighlight
      getOptionLabel={(option) => option.name}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          {option.name} 
        </Box>
      )}
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