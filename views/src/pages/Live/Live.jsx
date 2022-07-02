import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Typography } from "@material-ui/core";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "depart_ville", headerName: "depart_ville", width: 130 },
  { field: "arrival_ville", headerName: "arrival_ville", width: 130 },
  {
    field: "depart_time",
    headerName: "depart_time",
    width: 90,
  },
  {
    field: "personnes",
    headerName: "personnes",
    width: 160,
  },
  {
    field: "colis",
    headerName: "colis",
    width: 160,
  },
  {
    field: "ticket_price",
    headerName: "ticket_price",
    width: 160,
  },
  {
    field: "colis_price",
    headerName: "colis_price",
    width: 160,
  },
];

export default function BusList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/bus/getAll")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));

    return () => {
      console.log(data);
    };
  }, []);

  return (
    <div className="w-full ">
      <div className="mt-8 ml-10">
        <Typography variant="h3" component="h3">
          List des buss
        </Typography>
      </div>
      <div className="h-[400px] w-full mt-10">
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
}
