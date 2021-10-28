import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import LoginValidation from "./LoginValidation";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
const Login = (handleChange) => {
  let [errors, setErrors] = useState({});
  let history = useHistory();

  const paperStyle = {
    padding: 20,
    height: "73vh",
    width: 250,
    margin: "0 auto",
  };
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const BuutonMa = { padding: "20px 2px" };

  const handleInput = (e) => {
    const { name, value } = e.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var errors = LoginValidation(data);
    setErrors(errors);
    if (!errors.hasErrors) {
      console.log(data);
      alert("successfully logged In");
      history.push("/dashboard");
    }
  };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}></Avatar>
          <h2>Sign In</h2>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            fullWidth
            name="email"
            required
            value={data.email}
            placeholder="Enter Your Email"
            onChange={handleInput}
          />
          {errors.email && (
            <p style={{ fontSize: "13px", fontWeight: "bold", color: "red" }}>
              {errors.email}
            </p>
          )}
          <TextField
            label="Password"
            type="password"
            name="password"
            fullWidth
            required
            value={data.password}
            placeholder="Enter Your Password"
            onChange={handleInput}
          />
          {errors.password && (
            <p style={{ fontSize: "13px", fontWeight: "bold", color: "red" }}>
              {errors.password}
            </p>
          )}

          <Grid align="center" style={BuutonMa}>
            <Button type="submit" variant="contained" color="secondary">
              Log In
            </Button>
          </Grid>
        </form>
        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
