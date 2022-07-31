import { useState } from "react";
import axios from "axios";
import {
  Typography,
  Button,
  TextField,
  Grid,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  OutlinedInput,
  IconButton,
  InputAdornment,
} from "@material-ui/core";

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Users = () => {
  const [role, setRole] = useState("vendor");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const [values, setValues] = useState({
    amount: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const add_user =() => {
    console.log(firstName, lastName, phone, email, password, role);
  };

  return (
    <div className="m-10">
      <Typography variant="h4" className="text-center">
        Add Users
      </Typography>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <FormControl fullWidth>
          <InputLabel id="RoleID">Role</InputLabel>
          <Select
            labelId="RoleID"
            id="role"
            value={role}
            label="Role"
            defaultValue={"vendor"}
            onChange={(e) => {
              setRole(e.target.value);
            }}
          >
            <MenuItem value={"admin"}>Admin</MenuItem>
            <MenuItem value={"vendor"}>Vendeur</MenuItem>
          </Select>
        </FormControl>
        <TextField
          margin="normal"
          id="outlined-basic"
          label="email*"
          variant="outlined"
          size="small"
          fullWidth
          onChange={(e) => setEmail(e.target.value)}
          />
        <TextField
          margin="normal"
          id="outlined-basic"
          label="First Name*"
          variant="outlined"
          size="small"
          fullWidth
          onChange={(e) => setFirstName(e.target.value)}
          />
        <TextField
          margin="normal"
          id="outlined-basic"
          label="Last Name*"
          variant="outlined"
          size="small"
          fullWidth
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          margin="normal"
          id="outlined-basic"
          label="Phone*"
          variant="outlined"
          size="small"
          fullWidth
          onChange={(e) => setPhone(e.target.value)}
        />
        
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <Button variant="contained" color="primary" onClick={add_user}>
          Ajouter un bus
        </Button>
      </Grid>
    </div>
  );
};

export default Users;
