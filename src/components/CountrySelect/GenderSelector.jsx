
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import language from '../../utils/language.json'
import { useSelector } from 'react-redux';

export default function GenderSelector(props) {

  const lang = useSelector(state => state.language)
  

  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: 300 }}
      options={[
        {
          name : language.Man[lang],
          id: 'male'

        },
        {
          name : language.Woman[lang],
          id: 'female'

        }
      ]}
      autoHighlight
      getOptionLabel={(option) => option.name}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          {option.name} 
        </Box>
      )}
      // onChange={(event, newValue) => {
      //   props.setJins(newValue.id)
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