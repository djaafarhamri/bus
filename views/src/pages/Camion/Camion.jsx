import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Typography, Button, Grid, ListItem } from "@material-ui/core";
import edit from "../../assets/114-edit-pencil-rename-outline.png";
import remove from "../../assets/39-trash-outline.png";

const handleCellEdit = (params) => {
  axios
    .post(
      `http://localhost:4000/truck/edit_${params.field}`,
      {
        id: params.id,
        value: params.value,
      },
      {
        withCredentials: true,
      }
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default function Camion() {
  const [data, setData] = useState([]);
  const columns = [
    { field: "id", headerName: "ID", width: 70, editable: false },
    {
      field: "depart_ville",
      headerName: "depart_ville",
      width: 160,
      editable: true,
    },
    {
      field: "arrival_ville",
      headerName: "arrival_ville",
      width: 160,
      editable: true,
    },
    {
      field: "depart_time",
      headerName: "depart_time",
      width: 120,
      editable: true,
    },
    {
      field: "max_colis",
      headerName: "max colis",
      width: 120,
      editable: true,
    },
    {
      field: "frais",
      headerName: "frais",
      width: 160,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      sortable: false,
      renderCell: (params) => {
        const onRemove = async (e) => {
          e.stopPropagation(); // don't select this row after clicking

          await axios
            .post(
              `http://localhost:4000/truck/delete`,
              { id: params.id },
              { withCredentials: true }
            )
            .then((res) => {
              // delete row from datagrid
              setData(data.filter((row) => row.id !== params.id));
              //delete row
            })
            .catch((err) => {
              console.log(err);
            });
        };

        return (
          <Button onClick={onRemove}>
            <img className="h-7 w-7" src={remove} alt="edit" />
          </Button>
        );
      },
    },
  ];

  useEffect(() => {
    axios
      .get("http://localhost:4000/truck/getAll")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full bg-[#eff3f7]">
      <div className="shadow-[0_7px_7px_0px_rgba(0,0,0,0.2)] bg-[white] m-10">
        <div className="mt-8 ml-10">
          <Typography variant="h4" component="h4">
            List des camions
          </Typography>
        </div>
        <div className="h-[400px] w-full mt-10 bg-[white]">
          {/* header */}
          <div className="grid-cols-10 grid	">
            <h2 className="col-start-1 col-end-2 font-bold">ID</h2>
            <h2 className="col-start-2 col-end-4 font-bold">depart_ville</h2>
            <h2 className="col-start-4 col-end-6 font-bold">arrival_ville</h2>
            <h2 className="col-start-6 col-end-7 font-bold">depart_time</h2>
            <h2 className="col-start-7 col-end-8 font-bold">max colis</h2>
            <h2 className="col-start-8 col-end-9 font-bold">frais</h2>
            <h2 className="col-start-9 col-end-10 font-bold">options</h2>
            {data &&
              data.map((row, i) => (
                <div className="contents">
                  <p className="col-start-1 col-end-2">{row.id}</p>
                  <p className="col-start-2 col-end-4">{row.depart_ville}</p>
                  <p className="col-start-4 col-end-6">{row.arrival_ville}</p>
                  <p className="col-start-6 col-end-7">{row.depart_time}</p>
                  <p className="col-start-7 col-end-8">{row.max_colis}</p>
                  <p className="col-start-8 col-end-9">{row.frais}</p>
                </div>
              ))}
          </div>
          {/* <DataGrid
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            onCellEditCommit={(params) => {
              handleCellEdit(params);
            }} 
          />*/}
        </div>
      </div>
    </div>
  );
}
