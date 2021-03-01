import {
  Container,
  FormControl,
  Input,
  InputLabel,
  Paper,
  Typography,
  MenuItem,
  Select,
} from "@material-ui/core";
import Link from "next/link";
import { ArrowBack } from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import { useStyles } from "../../styles/useStyles";

export type FormProps = {
  handleSubmit: (e) => void;
  handleLang: (e) => void;
  developers;
  name: string;
  setName;
  email: string;
  setEmail;
  age: string;
  setAge;
  url: string;
  setUrl;
  lang: string;
  setLang;
};

export default function Form({
  handleSubmit,
  handleLang,
  developers,
  name,
  setName,
  email,
  setEmail,
  age,
  setAge,
  url,
  setUrl,
  lang,
  setLang,
}: FormProps) {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" className={classes.root}>
      <Paper className={classes.paper}>
        {!developers ? (
          <Typography variant="h5">Cadastrar desenvolvedor</Typography>
        ) : (
          <span>
            <Link href="/">
              <ArrowBack cursor="pointer" />
            </Link>
            <Typography variant="h5">Editar desenvolvedor</Typography>
          </span>
        )}

        <form onSubmit={handleLang} className={classes.formTech}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Tecnologias</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={lang}
              onChange={(event) => setLang(event.target.value)}
            >
              <MenuItem value="Angular">Angular</MenuItem>
              <MenuItem value="C#">C#</MenuItem>
              <MenuItem value="Ionic">Ionic</MenuItem>
              <MenuItem value="Javascript">Javascript</MenuItem>
              <MenuItem value="Laravel">Laravel</MenuItem>
              <MenuItem value="Mensageria">Mensageria</MenuItem>
              <MenuItem value="NodeJs">NodeJs</MenuItem>
              <MenuItem value="React">React</MenuItem>
            </Select>
          </FormControl>

          <Button
            className={classes.btnRegisterTechs}
            variant="contained"
            color="primary"
            type="submit"
          >
            Cadastrar tecnologia
          </Button>
        </form>

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
            className={classes.btn}
            variant="contained"
            color="primary"
            type="submit"
          >
            Cadastrar desenvolvedor
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
