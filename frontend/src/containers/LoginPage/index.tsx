import Button from "@material-ui/core/Button";
import { UserData } from "../../domain/posts/post";
import { useStyles } from "./styles";
import {
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Paper,
  Typography,
} from "@material-ui/core";

export type LoginPageProps = {
  developers: UserData[];
};

export default function LoginPage({ user }: LoginPageProps) {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h5">Faça o login</Typography>
        <form className={classes.form}>
          <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="email" type="email" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">
              We'll never share your email.
            </FormHelperText>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Password</InputLabel>
            <Input
              id="password"
              type="password"
              aria-describedby="my-helper-text"
            />
            <FormHelperText id="my-helper-text">
              We'll never share your password.
            </FormHelperText>
          </FormControl>
          <Button type="submit" color="primary">
            Entrar
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
