import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Typography, Button } from "@material-ui/core";
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
            .post(`http://localhost:4000/truck/delete`,
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
    <div className="w-full ">
      <div className="mt-8 ml-10">
        <Typography variant="h3" component="h3">
          List des camions
        </Typography>
      </div>
      <div className="h-[400px] w-full mt-10">
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          onCellEditCommit={(params) => {
            handleCellEdit(params);
          }}
        />
      </div>
    </div>
  );
}
