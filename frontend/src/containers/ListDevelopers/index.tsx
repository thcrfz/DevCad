import { Paper, Typography } from "@material-ui/core";
import Link from "next/link";

import { useStyles } from "../../styles/form-styles";

export default function ListDeveloper() {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Typography variant="h4">Lista de desenvolvedores</Typography>
      <Link href="/register">
        <a>Cadastrar desenvolvedor</a>
      </Link>
    </Paper>
  );
}
