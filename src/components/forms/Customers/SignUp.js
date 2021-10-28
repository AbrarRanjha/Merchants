import React, { useState } from "react";

import { Grid, Paper, Avatar, Typography, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import "./signup.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Validations from "./Validations";
import "react-image-crop/dist/ReactCrop.css";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    secretPhrase: "",
    status: "",
  });
  const [state, setState] = useState({ profileImg: "" });
  const paperStyle = { padding: 20, width: 300, margin: "0 auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };

  let [errors, setErrors] = useState({});
  const ChangeEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setState({ profileImg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const { profileImg } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    var errors = Validations(data, state);
    setErrors(errors);
    if (!errors.hasErrors) {
      console.log(data, state);
      alert("submitted SuccessFully!");
    }
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}></Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill the form to create the account
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <div className="img-holder">
            <img src={profileImg} alt="" id="img" className="img" />
          </div>
          <input
            type="file"
            required
            accept="image/*"
            id="input"
            onChange={imageHandler}
          />
          <div className="label">
            <label className="image-upload" htmlFor="input" required>
              <i className="material-icons">add_photo_alternate</i>
              Choose profile
            </label>
          </div>

          <TextField
            fullWidth
            label="Name"
            onChange={ChangeEvent}
            name="name"
            value={data.name}
          />
          {errors.name && (
            <p style={{ fontSize: "13px", fontWeight: "bold", color: "red" }}>
              {errors.name}
            </p>
          )}

          <TextField
            fullWidth
            label="Email"
            type="email"
            onChange={ChangeEvent}
            name="email"
            value={data.email}
          />
          {errors.email && (
            <p style={{ fontSize: "13px", fontWeight: "bold", color: "red" }}>
              {errors.email}
            </p>
          )}

          <TextField
            fullWidth
            label="Mobile No"
            onChange={ChangeEvent}
            name="phone"
            value={data.phone}
          />
          {errors.phone && (
            <p style={{ fontSize: "13px", fontWeight: "bold", color: "red" }}>
              {errors.phone}
            </p>
          )}

          <TextField
            fullWidth
            label="Password"
            type="password"
            onChange={ChangeEvent}
            name="password"
            value={data.password}
          />
          {errors.password && (
            <p style={{ fontSize: "13px", fontWeight: "bold", color: "red" }}>
              {errors.password}
            </p>
          )}

          <TextField
            fullWidth
            label="Available Points"
            type="text"
            onChange={ChangeEvent}
            name="secretPhrase"
            value={data.secretPhrase}
            gutterBottom
          />
          {errors.secretPhrase && (
            <p style={{ fontSize: "13px", fontWeight: "bold", color: "red" }}>
              {errors.secretPhrase}
            </p>
          )}

          <FormControl component="fieldset" style={marginTop}>
            <FormLabel component="legend">Status</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="row-radio-buttons-group"
              onChange={ChangeEvent}
              required
            >
              <FormControlLabel
                value="active"
                name="status"
                control={<Radio />}
                label="Active"
              />
              <FormControlLabel
                value="suspended"
                name="status"
                control={<Radio />}
                label="Suspended"
              />
            </RadioGroup>
            {errors.status && (
              <p style={{ fontSize: "13px", fontWeight: "bold", color: "red" }}>
                {errors.status}
              </p>
            )}
          </FormControl>
          <Grid align="center">
            <Button type="submit" variant="contained" color="primary">
              Signup
            </Button>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
};

export default SignUp;
