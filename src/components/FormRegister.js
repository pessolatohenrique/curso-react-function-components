import React from "react";
import { TextField, Button, FormControlLabel, Switch } from "@material-ui/core";

function FormRegister() {
  return (
    <form>
      <TextField
        id="name"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="lastname"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <FormControlLabel
        control={<Switch name="sales" color="primary" checked />}
        label="Promoções"
      />
      <FormControlLabel
        control={<Switch name="news" color="primary" checked />}
        label="Novidades"
      />
      <br />
      <br />
      <Button variant="contained" color="primary">
        Salvar
      </Button>
    </form>
  );
}

export default FormRegister;
