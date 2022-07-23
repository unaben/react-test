import React from "react";
import MyAlert from "./components/myAlertComp/MyAlert";
import { Stack, Typography } from "@mui/material";
import Trigger from "./components/triggerComp/Trigger";
import useHandleChange from "./components/hooks/useHandleChange";

const App = () => {
const {warning, info, error, handleChange} = useHandleChange()

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
