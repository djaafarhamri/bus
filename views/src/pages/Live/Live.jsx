import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Typography, Button } from "@material-ui/core";
import edit from '../../assets/114-edit-pencil-rename-outline.png';
import remove from '../../assets/39-trash-outline.png';

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "depart_ville", headerName: "depart_ville", width: 160 },
  { field: "arrival_ville", headerName: "arrival_ville", width: 160 },
  {
    field: "depart_time",
    headerName: "depart_time",
    width: 120,
  },
  {
    field: "personnes",
    headerName: "personnes",
    width: 100,
  },
  {
    field: "colis",
    headerName: "colis",
    width: 100,
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
  {
    field: "action",
    headerName: "Action",
    width: 160,
    sortable: false,
    renderCell: (params) => {
      const onEdit = (e) => {
        e.stopPropagation(); // don't select this row after clicking

        const api = params.api;
        const thisRow = {};

        api
          .getAllColumns()
          .filter((c) => c.field !== "__check__" && !!c)
          .forEach(
            (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
          );

        return alert(JSON.stringify(thisRow, null, 4));
      };
      const onRemove = (e) => {
        e.stopPropagation(); // don't select this row after clicking

        const api = params.api;
        const thisRow = {};

        api
          .getAllColumns()
          .filter((c) => c.field !== "__check__" && !!c)
          .forEach(
            (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
          );

        return alert(JSON.stringify(thisRow, null, 4));
      };

      return (
        <>
          <Button onClick={onEdit}><img className="h-8 w-8" src={edit} alt="edit" /></Button>
          <Button onClick={onRemove}><img className="h-7 w-7" src={remove} alt="edit" /></Button>
        </>
      );
    },
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
