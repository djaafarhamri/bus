import { TextField, Button } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const data = {
      email,
      password,
    };
    await axios
      .post("http://localhost:4000/user/login", data, {withCredentials: true})
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <TextField
        margin="normal"
        id="outlined-basic"
        label="Email*"
        variant="outlined"
        size="small"
        fullWidth
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        margin="normal"
        id="outlined-basic"
        label="Password*"
        variant="outlined"
        size="small"
        type={"password"}
        fullWidth
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={login}>
        Login
      </Button>
    </div>
  );
};

export default Login;
