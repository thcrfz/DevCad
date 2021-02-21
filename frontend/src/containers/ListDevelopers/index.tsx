import {
  Container,
  createStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  withStyles,
} from "@material-ui/core";
import Link from "next/link";

import { useStyles } from "../../styles/useStyles";
import { Theme } from "@material-ui/core/styles";

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

export default function ListDeveloper() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Nome</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Idade</StyledTableCell>
              <StyledTableCell align="center">Url</StyledTableCell>
              <StyledTableCell align="center">Tecnologias</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell align="center">Amanda</StyledTableCell>
              <StyledTableCell align="center">amanda@gmail.com</StyledTableCell>
              <StyledTableCell align="center">19</StyledTableCell>
              <StyledTableCell align="center">
                https://linkedin.com/amanda
              </StyledTableCell>
              <StyledTableCell align="center">
                C#, Javascript, React
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
