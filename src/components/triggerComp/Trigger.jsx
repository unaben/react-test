import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Trigger = ({ handleChange }) => {
  const [alert, setAlert] = useState("");

  useEffect(() => {
    handleChange(alert);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alert]);
  
  return (
    <Fragment>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Alert</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          value={alert}
          onChange={(e) => setAlert(e.target.value)}
        >
          <MenuItem value={""}>Default</MenuItem>
          <MenuItem value={"info"}>Info</MenuItem>
          <MenuItem value={"warning"}>Warning</MenuItem>
          <MenuItem value={"error"}>Error</MenuItem>
        </Select>
      </FormControl>
    </Fragment>
  );
};

export default Trigger;
