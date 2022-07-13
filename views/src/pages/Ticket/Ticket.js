import { useState } from "react";
import axios from "axios";
import {
  Typography,
  Button,
  TextField,
  Grid,
  Container,
} from "@material-ui/core";

const Ticket = () => {
  const [ref, setRef] = useState("");
  const [bus, setBus] = useState("");
  const [frais, setFrais] = useState(0);
  const [remarque, setRemarque] = useState("");

    const print = () => {}

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

          <Button variant="contained" color="primary" onClick={print}>
            Print
          </Button>
        </Grid>
      </div>
    </div>
  );
};

export default Ticket;
