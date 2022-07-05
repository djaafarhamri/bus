import { useState } from "react";
import axios from "axios";
import {
  Typography,
  Button,
  TextField,
  Grid,
  Container,
} from "@material-ui/core";

const AddBus = () => {
  const [ref, setRef] = useState("");
  const [ticketPrice, setTicketPrice] = useState(0);
  const [colisPrice, setColisPrice] = useState(0);
  const [departville, setDepartVille] = useState("");
  const [arriveville, setArriveVille] = useState("");
  const [departTime, setDepartTime] = useState("");
  const [arriveTime, setArriveTime] = useState("");
  const [maxPersonne, setMaxPersonne] = useState(0);
  const [maxColis, setMaxColis] = useState(0);

  const add_bus = async () => {
    const data = {
      ref,
      ticketPrice,
      colisPrice,
      departville,
      arriveville,
      departTime,
      arriveTime,
      maxPersonne,
      maxColis,
    };
    await axios
      .post("http://localhost:4000/bus/add_bus", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="mt-10">
        <Typography variant="h3" component="h3">
          Ajouter un bus
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
            onChange={(e) => setTicketPrice(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            id="outlined-basic"
            label="Colis price*"
            variant="outlined"
            size="small"
            onChange={(e) => setColisPrice(e.target.value)}
          />
          <div>
            <TextField
              margin="normal"
              id="outlined-basic"
              label="Depart ville*"
              variant="outlined"
              size="small"
              onChange={(e) => setDepartVille(e.target.value)}
            />
            <TextField
              margin="normal"
              id="outlined-basic"
              label="Arrive ville*"
              variant="outlined"
              size="small"
              onChange={(e) => setArriveVille(e.target.value)}
            />
          </div>
          <TextField
            margin="normal"
            id="outlined-basic"
            label="Depart time*"
            variant="outlined"
            size="small"
            fullWidth
            onChange={(e) => setDepartTime(e.target.value)}
          />
          <TextField
            margin="normal"
            id="outlined-basic"
            label="Max personne*"
            variant="outlined"
            size="small"
            fullWidth
            onChange={(e) => setMaxPersonne(e.target.value)}
          />
          <TextField
            margin="normal"
            id="outlined-basic"
            label="Max colis*"
            variant="outlined"
            size="small"
            fullWidth
            onChange={(e) => setMaxColis(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={add_bus}>
            Ajouter
          </Button>
        </Grid>
      </div>
    </div>
  );
};

export default AddBus;
