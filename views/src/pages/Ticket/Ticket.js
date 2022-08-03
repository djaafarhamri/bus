import { useState, useRef } from "react";
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import {
  Typography,
  Button,
  TextField,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { useEffect } from "react";

const Ticket = () => {
  const [category, setCategory] = useState("personne");
  const [allDepart, setAllDepart] = useState();
  const [allArrival, setAllArrival] = useState();
  const [depart, setDepart] = useState();
  const [departDay, setDepartDay] = useState();
  const [departTime, setDepartTime] = useState();
  const [arrival, setArrival] = useState();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [frais, setFrais] = useState(0);
  const [remarque, setRemarque] = useState("");
  const [expediteur, setExpediteur] = useState("");
  const [beneficiare, setBeneficiare] = useState("");

  const billet = useRef(null);

  const handleTimeChange = (newValue) => {
    setDepartTime(newValue);
  };

  const handleDayChange = (newValue) => {
    setDepartDay(newValue);
  };

  const handlePrint = useReactToPrint({
    content: () => billet.current,
  });

  useEffect(() => {
    axios
      .get(
        `http://localhost:4000/${
          category === "personne" ? "bus" : "truck"
        }/getAll`
      )
      .then((res) => {
        setAllDepart(
          res.data.map((bus) => ({
            depart_ville: bus.depart_ville,
          }))
        );
      })
      .catch((err) => console.log(err));
  }, [category]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:4000/${
          category === "personne" ? "bus" : "truck"
        }/getAllByDepart/${depart}`
      )
      .then((res) => {
        setAllArrival(res.data);
      })
      .catch((err) => console.log(err));
  }, [depart, category]);
  const addPersonne = async () => {
    await axios
      .post(
        `http://localhost:4000/personne/add_personne`,
        {
          name,
          depart_ville: depart,
          arrival_ville: arrival,
          contact,
          depart_time: departTime,
          depart_day: departDay,
        }, {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const addColis = async () => {
    await axios
      .post(
        `http://localhost:4000/colis/add_colis`,
        {
          frais,
          depart_ville: depart,
          arrival_ville: arrival,
          expediteur,
          beneficiare,
          remarque,
        }, {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

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
          {allDepart && (
            <FormControl fullWidth>
              <InputLabel id="DepartID">Depart ville</InputLabel>
              <Select
                labelId="DepartID"
                id="depart"
                value={depart}
                label="Depart Ville"
                onChange={(e) => {
                  setDepart(e.target.value);
                }}
              >
                {allDepart.map((depart) => (
                  <MenuItem value={depart.depart_ville}>
                    {depart.depart_ville}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
          {allArrival && (
            <FormControl fullWidth>
              <InputLabel id="ArrivalID">Arrival ville</InputLabel>
              <Select
                labelId="ArrivalID"
                id="arrival"
                value={arrival}
                label="Arrival Ville"
                onChange={(e) => {
                  setArrival(e.target.value);
                }}
              >
                {allArrival.map((arrival) => (
                  <MenuItem value={arrival.arrival_ville}>
                    {arrival.arrival_ville}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
          {category === "personne" && (
            <>
              <TextField
                fullWidth
                margin="normal"
                id="outlined-basic"
                label="M. / MME*"
                variant="outlined"
                size="small"
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                fullWidth
                margin="normal"
                id="outlined-basic"
                label="Contact*"
                variant="outlined"
                size="small"
                onChange={(e) => setContact(e.target.value)}
              />
              {/* <MobileDatePicker
          label="Date mobile"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        /> */}
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <DesktopDatePicker
                  label="Depart Date"
                  inputFormat="MM/DD/yyyy"
                  value={departDay}
                  onChange={handleDayChange}
                  renderInput={(params) => <TextField {...params} />}
                />
                <TimePicker
                  label="Time"
                  value={departTime}
                  onChange={handleTimeChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </>
          )}

          {category === "colis" && (
            <>
              <TextField
                fullWidth
                margin="normal"
                id="outlined-basic"
                label="Frais*"
                variant="outlined"
                size="small"
                onChange={(e) => setFrais(e.target.value)}
              />
              <TextField
                margin="normal"
                id="outlined-basic"
                label="Remarque*"
                variant="outlined"
                size="small"
                onChange={(e) => setRemarque(e.target.value)}
              />
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

          <Button variant="contained" color="primary" onClick={handlePrint}>
            Print
          </Button>
          {category === "personne" ? (
            <Button variant="contained" color="primary" onClick={addPersonne}>
              Add
            </Button>
          ) : (
            <Button variant="contained" color="primary" onClick={addColis}>
              Add
            </Button>
          )}
        </Grid>
      </div>
      <div className="hidden">
        {category === "personne" && departTime && departDay && (
          <div ref={billet}>
            <Typography variant="h3" component="h3">
              Groupe Sonef
            </Typography>
            <Typography variant="h5" component="h5">
              Billet Voyageur
            </Typography>
            <Typography variant="h5" component="h5">
              {new Date(Date.now()).getDate()}/{new Date(Date.now()).getMonth()}
              /{new Date(Date.now()).getFullYear()}
            </Typography>
            <Typography variant="h5" component="h5">
              CONVOCATION {departTime._d.getHours()}:
              {departTime._d.getMinutes()}
            </Typography>
            <Typography variant="h5" component="h5">
              M. / MME : {name}
            </Typography>
            <Typography variant="h5" component="h5">
              Contact : {contact}
            </Typography>
            <Typography variant="h5" component="h5">
              {depart} / {arrival}
            </Typography>
            <Typography variant="h5" component="h5">
              Depart : {departDay._d.getDate()}/{departDay._d.getMonth() + 1}/
              {departDay._d.getFullYear()}
            </Typography>
            <Typography variant="h5" component="h5">
              Expiration :{" "}
              {new Date(departDay._d.getTime() + 2629800000).getDate()}/
              {new Date(departDay._d.getTime() + 2629800000).getMonth() + 1}/
              {new Date(departDay._d.getTime() + 2629800000).getFullYear()}
            </Typography>
          </div>
        )}
        {category === "colis" && departTime && departDay && (
          <div ref={billet}>
            <Typography variant="h3" component="h3">
              Premiere Classe
            </Typography>
            <Typography variant="h5" component="h5">
              {depart}
            </Typography>
            <Typography variant="h5" component="h5">
              {arrival}
            </Typography>
            <Typography variant="h5" component="h5">
              -------------------------------------
            </Typography>
            <Typography variant="h5" component="h5">
              BAGUAGE <span className="ml-16">Frais: {frais}</span>
            </Typography>
            <Typography variant="h5" component="h5">
              DATE{" "}
              <span className="ml-24">
                {new Date(Date.now()).getDate()}/
                {new Date(Date.now()).getMonth()}/
                {new Date(Date.now()).getFullYear()}-
                {new Date(Date.now()).getHours()}:
                {new Date(Date.now()).getMinutes()}
              </span>
            </Typography>
            <Typography variant="h5" component="h5">
              Expediteur <span className="ml-12">{expediteur}</span>
            </Typography>
            <Typography variant="h5" component="h5">
              Beneficiaire <span className="ml-11">{beneficiare}</span>
            </Typography>
            <Typography variant="h5" component="h5">
              Remarque <span className="ml-11">{remarque}</span>
            </Typography>
            <Typography variant="h5" component="h5" style={{ fontWeight: 700 }}>
              NB: la duree de guarantie de <br></br> ce colis est de 15 jours.
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ticket;
