
import styled from 'styled-components';
import * as theme from '../../../../theme';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 10px;
`;

export const TableHead = styled.thead`
  background-color:  ${theme.COLORS.gray} ;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr``;

export const TableHeaderCell = styled.th`
  padding: 8px;
  font-weight: bold;
  text-align: center;
  border-bottom: 1px solid ${theme.COLORS.tableGray};
`;

export const TableCell = styled.td`
  padding: 8px;
  border-bottom: 1px solid ${theme.COLORS.tableGray};
  text-align: center;
`;
export const TableContainer = styled.div`

`;
export const ButtonWraper = styled.div`
display: flex;
justify-content: space-around;
`;
