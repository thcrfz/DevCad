import {
  Container,
  FormControl,
  Input,
  InputLabel,
  Paper,
  Typography,
} from "@material-ui/core";
import Link from "next/link";
import { ArrowBack } from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import { useStyles } from "../../styles/useStyles";

export type FormProps = {
  handleSubmit: (e) => void;
  name: string;
  setName;
  email: string;
  setEmail;
  age: string;
  setAge;
  url: string;
  setUrl;
  link: string;
};

export default function Form({
  handleSubmit,
  name,
  setName,
  email,
  setEmail,
  age,
  setAge,
  url,
  setUrl,
  link,
}: FormProps) {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" className={classes.root}>
      <Paper className={classes.paper}>
        <Link href={link}>
          <ArrowBack cursor="pointer" />
        </Link>
        <Typography variant="h5">Cadastrar desenvolvedor</Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="name">Nome</InputLabel>
            <Input
              id="nome"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age">Idade</InputLabel>
            <Input
              id="age"
              value={age}
              onChange={(event) => setAge(event.target.value)}
            />
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="linkedin">URL do linkedin</InputLabel>
            <Input
              id="linkedin"
              type="url"
              value={url}
              onChange={(event) => setUrl(event.target.value)}
            />
          </FormControl>

          <Button
            className={classes.formControl}
            variant="contained"
            color="primary"
            type="submit"
          >
            Entrar
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
