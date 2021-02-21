import {
  Container,
  FormControl,
  Input,
  InputLabel,
  Paper,
  IconButton,
  Typography,
} from "@material-ui/core";
import Link from "next/link";
import { get } from "lodash";
import validator from "validator";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useStyles } from "../../styles/useStyles";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { ArrowBack } from "@material-ui/icons";

// eslint-disable-next-line react/prop-types
export default function FormDeveloper({ match }) {
  const id = get(match, "params.id", 0);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [url, setUrl] = useState<string>("");

  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (name.length < 3 || name.length > 255) {
      toast.error("Nome precisa ter entre 3 e 255 caracteres.");
      formErrors = true;
    }
    if (!validator.isEmail(email)) {
      toast.error("email inválido");
      formErrors = true;
    }
    if (!validator.isInt(String(age))) {
      toast.error("idade inválida");
      formErrors = true;
    }
    if (!validator.isURL(url)) {
      toast.error("url inválida");
      formErrors = true;
    }
  }

  const classes = useStyles();
  return (
    <Container maxWidth="sm" className={classes.root}>
      <Paper className={classes.paper}>
        <Link href="/">
          <ArrowBack cursor="pointer" />
        </Link>
        <Typography variant="h5">
          {id ? "Editar desenvolvedor" : "Cadastrar desenvolvedor"}
        </Typography>
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

FormDeveloper.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
