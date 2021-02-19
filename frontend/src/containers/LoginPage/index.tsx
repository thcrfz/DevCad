import Button from "@material-ui/core/Button";
import { isEmail } from "validator";
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
import { useState } from "react";

export type LoginPageProps = {
  developers: UserData[];
};

export default function LoginPage({ user }: LoginPageProps) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (!isEmail(email)) {
      formErrors = true;
      console.log("Email inválido");
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      console.log("Senha inválida");
    }
    return formErrors ? true : console.log(email, password);
  }

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h5">Faça o login</Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
          <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-describedby="my-helper-text"
            />
            <FormHelperText id="my-helper-text">
              We'll never share your email.
            </FormHelperText>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Password</InputLabel>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
