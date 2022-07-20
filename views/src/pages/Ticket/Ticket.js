import { useState } from "react";
import axios from "axios";
import {
  Typography,
  Button,
  TextField,
  Grid,
  Container,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@material-ui/core";

const Ticket = () => {
  const [category, setCategory] = useState();
  const [ref, setRef] = useState("");
  const [bus, setBus] = useState("");
  const [frais, setFrais] = useState(0);
  const [remarque, setRemarque] = useState("");
  const [expediteur, setExpediteur] = useState("");
  const [beneficiare, setBeneficiare] = useState("");

  const print = () => {};

  return (
    <div className="w-full flex flex-col items-center">
      <div className="mt-10">
        <Typography variant="h3" component="h3">
          Ticket
        </Typography>
      </div>
      <div className="mt-10">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <TextField
            margin="normal"
            id="outlined-basic"
            label="Reference*"
            variant="outlined"
            size="small"
            fullWidth
            onChange={(e) => setRef(e.target.value)}
          />
          <FormControl fullWidth>
            <InputLabel id="CategoryID">Category</InputLabel>
            <Select
              labelId="CategoryID"
              id="category"
              value={category}
              label="Category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <MenuItem value={"colis"}>Colis</MenuItem>
              <MenuItem value={"personne"}>Personne</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            margin="normal"
            id="outlined-basic"
            label="Ticket price*"
            variant="outlined"
            size="small"
            onChange={(e) => setBus(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            id="outlined-basic"
            label="Colis price*"
            variant="outlined"
            size="small"
            onChange={(e) => setFrais(e.target.value)}
          />
          <TextField
            margin="normal"
            id="outlined-basic"
            label="Depart ville*"
            variant="outlined"
            size="small"
            onChange={(e) => setRemarque(e.target.value)}
          />
          {category === "colis" && (
            <>
              <TextField
                margin="normal"
                id="outlined-basic"
                label="expediteur*"
                variant="outlined"
                size="small"
                onChange={(e) => setExpediteur(e.target.value)}
              />
              <TextField
                margin="normal"
                id="outlined-basic"
                label="beneficiare*"
                variant="outlined"
                size="small"
                onChange={(e) => setBeneficiare(e.target.value)}
              />
            </>
          )}

          <Button variant="contained" color="primary" onClick={print}>
            Print
          </Button>
        </Grid>
      </div>
    </div>
  );
};

export default Ticket;
