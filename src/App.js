import React, { useState } from "react";
import MyAlert from "./components/MyAlert";
import { Stack, Typography } from "@mui/material";
import Trigger from "./components/Trigger";

const App = () => {
  const [warning, setWarning] = useState(false);
  const [info, setInfo] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (value) => {
    value === "warning" ? setWarning(true) : setWarning(false);
    value === "info" ? setInfo(true) : setInfo(false);
    value === "error" ? setError(true) : setError(false);
  };

  return (
    <>
      <Stack sx={{ width: "600px", padding: "20px" }} spacing={2}>
        <Typography variant={"h4"}>Alerts</Typography>
        {warning && (
          <MyAlert
            type={"warning"}
            title={"Warning"}
            content={"This is a warning message"}
          />
        )}
        {info && (
          <MyAlert
            type={"info"}
            title={"Information"}
            content={"This is a information message"}
          />
        )}
        {error && (
          <MyAlert
            type={"error"}
            title={"Error"}
            content={"This is an error message"}
          />
        )}
        <Trigger handleChange={handleChange} />
      </Stack>
    </>
  );
};

export default App;
