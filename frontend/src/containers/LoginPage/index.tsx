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
import { fecthPostSessionJson } from "../../utils/fetch-post-session";
import { SESSION_URL } from "../../config/app-config";
import { toast } from "react-toastify";
import { useRouter } from "next/Router";
import validator from "validator";
import jwt from "jsonwebtoken";

export default function LoginPage() {
  const classes = useStyles();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string>("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (!validator.isEmail(email) && !password)
        return toast.error("Os campos não podem ficar vazios.");
      await fecthPostSessionJson(SESSION_URL, email, password)
        .then((res) => {
          if (res.status === 401) return toast.error(res.errors[0]);
          const token = res.token;
          if (token) {
            const json = jwt.decode(token) as { [key: string]: string };
            setMessage("welcome" + json.email);
          }
          localStorage.setItem("token", token);
          toast.success(res.message);
          router.push("/home");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (e) {
      return console.log(e);
    }
  }

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h5">Faça o login</Typography>
        <h1>{message}</h1>
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
