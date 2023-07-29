import { MainWrapper, Title } from "../../global_styles/styles";
import { GuestsTitle, TableContainer } from "./style";
import TableGuests from "./TableGuests";


export default function GuestsTable() {
    return (
    <MainWrapper>
        <GuestsTitle>
          <Title>Xorijiy mehmonlar</Title>
        </GuestsTitle>
        <TableContainer>
            <TableGuests />
        </TableContainer>
    </MainWrapper>
    )
}