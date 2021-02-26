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
import { useEffect, useState } from "react";

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
  const [developer, setDeveloper] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    function getData() {
      setDeveloper(developers);
    }
    getData();
  }, [developers]);
  async function handleDelete(e, id, index) {
    e.persist();
    await fetchDeleteDeveloperJson(`${DEVELOPERS_URL}\\${id}`);
    const newDevs = [...developers];
    newDevs.splice(index, 1);
    setDeveloper(newDevs);
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
            {!developer ? (
              <div>Faça login</div>
            ) : (
              developer.map((dev, index) => (
                <StyledTableRow key={dev.id}>
                  <StyledTableCell align="center">{dev.name}</StyledTableCell>
                  <StyledTableCell align="center">{dev.email}</StyledTableCell>
                  <StyledTableCell align="center">{dev.age}</StyledTableCell>
                  <StyledTableCell align="center">{dev.url}</StyledTableCell>
                  <StyledTableCell align="center">
                    {get(dev, "languageModels[0].name", false) ? (
                      dev.languageModels[0].name
                    ) : (
                      <span>Sem linguagem</span>
                    )}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Link href={`/register/${dev.id}`}>
                      <EditRounded cursor="pointer" />
                    </Link>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <IconButton onClick={(e) => handleDelete(e, dev.id, index)}>
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
