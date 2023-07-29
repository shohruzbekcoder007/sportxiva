import { MainWrapper, Title } from "../../global_styles/styles";
import { MembersTitle, TableContainerMembers } from "./style";
import TableGuests from "./TableMembers";



export default function MembersTable() {
    return (
    <MainWrapper>
        <MembersTitle>
          <Title>Xorijiy mehmonlar</Title>
        </MembersTitle>
        <TableContainerMembers>
            <TableGuests />
        </TableContainerMembers>
    </MainWrapper>
    )
}