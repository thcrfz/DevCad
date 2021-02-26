import {
  Container,
  createStyles,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  withStyles,
} from "@material-ui/core";
import { get } from "lodash";
import Link from "next/link";
import { useStyles } from "../../styles/useStyles";
import { Theme } from "@material-ui/core/styles";
import { DeveloperData } from "../../domain/posts/post";
import { DeleteRounded, EditRounded } from "@material-ui/icons";
import { fetchDeleteDeveloperJson } from "../../utils/fetch-delete-developer";
import { DEVELOPERS_URL } from "../../config/app-config";

export type DeveloperProps = {
  developers: DeveloperData[];
};

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

export default function ListDeveloper({ developers }: DeveloperProps) {
  const classes = useStyles();
  async function handleDelete(e, id) {
    await fetchDeleteDeveloperJson(`${DEVELOPERS_URL}\\${id}`);
  }
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
              <StyledTableCell align="center">Editar</StyledTableCell>
              <StyledTableCell align="center">Excluir</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!developers ? (
              <div>Faça login</div>
            ) : (
              developers.map((developer) => (
                <StyledTableRow key={developer.id}>
                  <StyledTableCell align="center">
                    {developer.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {developer.email}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {developer.age}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {developer.url}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {get(developer, "languageModels[0].name", false) ? (
                      developer.languageModels[0].name
                    ) : (
                      <Link href="/languages">
                        <a>Cadastrar linguagem</a>
                      </Link>
                    )}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Link href={`/register/${developer.id}`}>
                      <EditRounded cursor="pointer" />
                    </Link>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <IconButton onClick={(e) => handleDelete(e, developer.id)}>
                      <DeleteRounded cursor="pointer" />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
