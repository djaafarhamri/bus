import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

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
    field: "max_personnes",
    headerName: "max_personnes",
    width: 160,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function BusList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/bus/getAll")
      .then((res) =>
        setData(
          res.data.map(
            ({
              id,
              depart_ville,
              depart_time,
              max_personnes,
              arrival_ville,
            }) => ({
              id,
              depart_ville,
              depart_time,
              max_personnes,
              arrival_ville,
            })
          )
        )
      )
      .catch((err) => console.log(err));

    return () => {console.log(data)};
  }, []);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
