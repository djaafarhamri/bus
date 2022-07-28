import {
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70, editable: false },
  {
    field: "name",
    headerName: "name",
    width: 160,
  },
  {
    field: "contact",
    headerName: "contact",
    width: 160,
  },
  {
    field: "montant",
    headerName: "montant",
    width: 120,
  },
  {
    field: "departTime",
    headerName: "departTime",
    width: 120,
  },
  {
    field: "departDay",
    headerName: "departDay",
    width: 160,
  },
];

const Historique = () => {
  const [allBus, setAllBus] = useState([]);
  const [bus, setBus] = useState();
  const [date, setDate] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:4000/bus/getAll")
      .then((res) => {
        setAllBus(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDayChange = (newValue) => {
    console.log(newValue._d, bus);
    setDate(newValue);
  };

  const search = () => {
    axios
      .post(
        "http://localhost:4000/bus/getAllPersonnesByDate",
        {
          bus,
          date,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        <Typography variant="h5" component="h5">
          choose a bus
        </Typography>
        <FormControl fullWidth>
          <InputLabel id="CategoryID">Category</InputLabel>
          <Select
            labelId="CategoryID"
            id="category"
            value={bus}
            label="Category"
            onChange={(e) => {
              setBus(e.target.value);
            }}
          >
            {allBus.map((bus) => (
              <MenuItem value={bus.id}>
                {bus.id}-{bus.depart_ville}/{bus.arrival_ville}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DesktopDatePicker
            label="Depart Date"
            inputFormat="MM/DD/yyyy"
            value={date}
            onChange={handleDayChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <Button variant="contained" color="primary" onClick={search}>
          Search
        </Button>
        {data && (
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        )}
      </div>
    </div>
  );
};

export default Historique;
