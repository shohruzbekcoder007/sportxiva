import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FlagImg } from '../../global_styles/styles';
import { GuestsFlagCountry } from './style';
import { participants } from '../../utils/API_urls';
import { GuestsDataUrl } from './requests';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: '#1F1F1F',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '20px',
    color: '#1F1F1F',
    fontStyle: 'normal',
    lineHeight: 'normal',
    padding: '25px',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "#F3F3F3",
    borderRadius: '15px'
  },
}));

// function createData(id, full_name, date, flag, country) {
//   return { id, full_name, date, flag, country };
// }

// const rows = [
//   createData(1,'Frozen yoghurt', 159, 'https://flagcdn.com/w320/as.png', 'American Samoa', ),
//   createData(2,'Ice cream sandwich', 237, 'https://flagcdn.com/w320/as.png', 'American Samoa'),
//   createData(3,'Eclair', 262, 'https://flagcdn.com/w320/as.png', 'American Samoa'),
//   createData(4, 'Cupcake', 305, 'https://flagcdn.com/w320/as.png', 'American Samoa'),
//   createData(5, 'Gingerbread',  356, 'https://flagcdn.com/w320/as.png', 'American Samoa'),
// ];

export default function TableGuests() {
    const [rows, setRows] = React.useState([])
React.useEffect(() => {
    GuestsDataUrl(participants + `?guest=True`, (response) => {
        console.log(response.data);
        setRows(response.data)
    }, (error) => {
        console.log(error)
    })
    }, [])

  return (
    <TableContainer>
      <Table sx={{ minWidth: '100%' }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell align="left">Ism familya</StyledTableCell>
            <StyledTableCell align="left">Ro’yxatdan o’tgan sanasi</StyledTableCell>
            <StyledTableCell align="left">Davlati</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="left">{row.full_name}</StyledTableCell>
              <StyledTableCell align="left">{row.date}</StyledTableCell>
              <StyledTableCell align="left"><GuestsFlagCountry><FlagImg><img src={row.flag} alt="Image" /></FlagImg><span>{row.country}</span></GuestsFlagCountry></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

