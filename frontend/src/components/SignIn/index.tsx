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
        <Typography variant="h5">Faça o login</Typography>
        <Button onClick={handleSingIn}>Cadastre-se ou faça o login</Button>
      </Paper>
    </Container>
  );
}
