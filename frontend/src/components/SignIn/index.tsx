import Button from "@material-ui/core/Button";
import { useStyles } from "../../styles/useStyles";
import { Container, Paper, Typography } from "@material-ui/core";

export type SignInProps = {
  handleSingIn: () => void;
};

export default function SignIn({ handleSingIn }: SignInProps) {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h2">DevCad</Typography>
        <Typography variant="h5" className={classes.btn}>
          Faça o login
        </Typography>
        <Typography className={classes.btn}>
          Para acessar os recursos do site.
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          className={classes.btn}
          onClick={handleSingIn}
        >
          SignIn
        </Button>
      </Paper>
    </Container>
  );
}
