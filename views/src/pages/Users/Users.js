import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Typography, Button } from "@material-ui/core";

export default function Users() {
  const [data, setData] = useState([]);
  const columns = [
    // { field: "id", headerName: "ID", width: 70, editable: false },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "first_name",
      headerName: "First Name",
      width: 160,
    },
    {
      field: "last_name",
      headerName: "Last Name",
      width: 120,
    },
    {
      field: "phone_number",
      headerName: "Phone",
      width: 120,
    },
    {
      field: "role",
      headerName: "Role",
      width: 120,
    },
  ];

  useEffect(() => {
    axios
      .get("http://localhost:4000/user/getAll")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full ">
      <div className="mt-8 ml-10">
        <Typography variant="h3" component="h3">
          List des users
        </Typography>
      </div>
      <div className="h-[400px] w-full mt-10">
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          getRowId={(row) => row._id}
          rowsPerPageOptions={[5]}
        />
      </div>
    </div>
  );
}
