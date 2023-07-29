import { MainWrapper, Title } from "../../global_styles/styles";
import { CountryMembersTitle, TableContainer } from "./style";
import TableCountryMembers from "./TableCountryMembers";


export default function CountryMembersTable() {
    return (
    <MainWrapper>
        <CountryMembersTitle>
          <Title>Festivalda ishtirok etuvchi davlatlar</Title>
        </CountryMembersTitle>
        <TableContainer>
            <TableCountryMembers />
        </TableContainer>
    </MainWrapper>
    )
}