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

const Historique = () => {
  const [category, setCategory] = useState("bus");
  const [allBus, setAllBus] = useState([]);
  const [bus, setBus] = useState();
  const [date, setDate] = useState();
  const [data, setData] = useState([]);

  const truckColumns = [
    { field: "id", headerName: "ID", width: 140 },
    {
      field: "frais",
      headerName: "frais",
      width: 200,
    },
    {
      field: "expediteur",
      headerName: "expediteur",
      width: 200,
    },
    {
      field: "beneficiare",
      headerName: "beneficiare",
      width: 120,
    },
    {
      field: `remarque`,
      headerName: "remarque",
      width: 120,
    }
  ];

  const busColumns = [
    { field: "id", headerName: "ID", width: 140 },
    {
      field: "name",
      headerName: "name",
      width: 200,
    },
    {
      field: "contact",
      headerName: "contact",
      width: 200,
    },
    {
      field: "montant",
      headerName: "montant",
      width: 120,
    },
    {
      field: `departTime`,
      headerName: "departTime",
      width: 120,
    },
    {
      field: "departDay",
      headerName: "departDay",
      width: 160,
    },
  ];

  useEffect(() => {
    axios
      .get(`http://localhost:4000/${category}/getAll`)
      .then((res) => {
        setAllBus(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  const handleDayChange = (newValue) => {
    setDate(newValue);
  };

  const searchBus = () => {
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
        const newArr = res.data.map((obj) => {
          return {
            ...obj,
            departTime: `${new Date(obj.departTime).getHours()}:${new Date(
              obj.departTime
            ).getMinutes()}`,
          };
        });
        const newArr2 = newArr.map((obj) => {
          return {
            ...obj,
            departDay: `${new Date(obj.departDay).getDate()}/${new Date(
              obj.departDay
            ).getMonth()}/${new Date(obj.departDay).getFullYear()}`,
          };
        });
        setData(newArr2);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const searchTruck = () => {
    axios
      .post(
        "http://localhost:4000/truck/getAllColisByDate",
        {
          bus,
          date,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full">
      <Typography variant="h5" component="h5">
        choose a category
      </Typography>
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
          <MenuItem value="bus">bus</MenuItem>
          <MenuItem value="truck">camion</MenuItem>
        </Select>
      </FormControl>
      <Typography variant="h5" component="h5">
        choose a {category}
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="BusID">Category</InputLabel>
        <Select
          labelId="BusID"
          id="bus"
          value={bus}
          label={category}
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
      {category === "bus" ? (
        <Button variant="contained" color="primary" onClick={searchBus}>
          Search
        </Button>
      ) : (
        <Button variant="contained" color="primary" onClick={searchTruck}>
          Search
        </Button>
      )}
      <div className="h-[400px] w-full mt-10">
        <DataGrid
          rows={data}
          columns={category === 'bus' ? busColumns : truckColumns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </div>
  );
};

export default Historique;
