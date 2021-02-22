import { GetStaticPaths, GetStaticProps } from "next";
import {
  getAllDevelopers,
  getIdDevelopers,
} from "../../data/developers/get-all-developers";
import { DeveloperData } from "../../domain/posts/post";
import { useRouter } from "next/router";
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
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import validator from "validator";
import { fetchPostDeveloperJson } from "../../utils/fetch-post-developer";
import { DEVELOPERS_URL } from "../../config/app-config";
import { fetchPutDeveloperJson } from "../../utils/fetch-put-developer";
import Loading from "../../components/Loading";

export type DynamicDevProps = {
  developers: DeveloperData;
};

const DynamicDevs = ({ developers }: DynamicDevProps) => {
  const router = useRouter();
  const classes = useStyles();

  const [name, setName] = useState<string>(developers.name);
  const [email, setEmail] = useState<string>(developers.email);
  const [age, setAge] = useState<string>(developers.age);
  const [url, setUrl] = useState<string>(developers.url);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;
    setIsLoading(true);

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
    const json = await fetchPutDeveloperJson(
      `${DEVELOPERS_URL}\\${developers.id}`,
      name,
      email,
      age,
      url,
    );

    return json;
    setIsLoading(false);
  }

  if (router.isFallback) return <Loading isLoading={isLoading} />;

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Loading isLoading={isLoading} />
      <Paper className={classes.paper}>
        <Link href="/">
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
};

export default DynamicDevs;

export const getStaticPaths: GetStaticPaths = async () => {
  const developers = await getAllDevelopers();

  return {
    paths: developers.map((dev) => {
      return {
        params: {
          id: dev.id.toString(),
        },
      };
    }),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const developers = await getIdDevelopers(params.id);
  return {
    props: { developers },
  };
};
