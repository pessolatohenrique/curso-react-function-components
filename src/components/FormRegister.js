import React, { useState } from "react";
import { TextField, Button, FormControlLabel, Switch } from "@material-ui/core";

function FormRegister() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [cpf, setCpf] = useState("");
  const [sales, setSales] = useState(true);
  const [news, setNews] = useState(true);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log("FIELDS", { name, lastname, cpf, sales, news });
      }}
    >
      <TextField
        id="name"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        id="lastname"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
        value={lastname}
        onChange={(event) => setLastname(event.target.value)}
      />
      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
        value={cpf}
        onChange={(event) => setCpf(event.target.value)}
      />
      <FormControlLabel
        control={
          <Switch
            name="sales"
            color="primary"
            checked={sales}
            onChange={(event) => setSales(event.target.checked)}
          />
        }
        label="Promoções"
      />
      <FormControlLabel
        control={
          <Switch
            name="news"
            color="primary"
            checked={news}
            onChange={(event) => setNews(event.target.checked)}
          />
        }
        label="Novidades"
      />
      <br />
      <br />
      <Button type="submit" variant="contained" color="primary">
        Salvar
      </Button>
    </form>
  );
}

export default FormRegister;
