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
      marginTop: theme.spacing(10),
    },
    form: {
      display: "grid",
    },
    formControl: {
      marginTop: theme.spacing(3),
    },
  }),
);
