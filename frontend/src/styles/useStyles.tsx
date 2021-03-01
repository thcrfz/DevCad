import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    paper: {
      alignItems: "center",
      padding: theme.spacing(3),
      marginTop: theme.spacing(5),
    },
    form: {
      display: "grid",
    },
    formTech: {
      display: "flex",
    },
    formControl: {
      marginTop: theme.spacing(1),
      minWidth: 120,
    },
    btnRegisterTechs: {
      fontSize: "8pt",
      height: "fit-content",
      padding: theme.spacing(1),
      margin: 0,
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
    container: {
      marginTop: theme.spacing(5),
    },
    table: {
      minWidth: 700,
    },
    btn: {
      marginTop: theme.spacing(3),
    },
  }),
);
