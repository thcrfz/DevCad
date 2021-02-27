import Button from "@material-ui/core/Button";
import { useStyles } from "../../styles/useStyles";
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
import { toast } from "react-toastify";
import { useRouter } from "next/Router";
import validator from "validator";
import jwt from "jsonwebtoken";
import { postSessionUser } from "../../data/session/post-session-user";
import { home } from "../../config/routes";

export default function LoginPage() {
  const classes = useStyles();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validator.isEmail(email) && !password)
      return toast.error("Os campos não podem ficar vazios.");
    try {
      const user = await postSessionUser(email, password);
      if (!user) return toast.error("Usuário não existe");
      toast.success(`Bem-vindo ${email}`);
      return router.push(home);
    } catch (e) {
      console.log(e);
    }
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
              Well never share your email.
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
              Well never share your password.
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
