import { Container, Typography } from "@material-ui/core";
import FormRegister from "./components/FormRegister";
import "@fontsource/roboto";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "20px",
  },
}));

function register(fields) {
  console.log("Fields on register", fields);
}

function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.container}>
      <Typography component="h1" variant="h3" align="center" color="primary">
        Cadastre-se
      </Typography>
      <FormRegister onRegister={register} />
    </Container>
  );
}

export default App;
