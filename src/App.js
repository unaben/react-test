import React from "react";
import { Stack, Typography } from "@mui/material";
import Trigger from "./components/triggerComp/Trigger";
import useHandleChange from "./components/hooks/useHandleChange";
import RenderAlert from "./components/renderAlert/RenderAlert";

const App = () => {
  const { warning, info, error, handleChange } = useHandleChange();

  return (
    <>
      <Stack sx={{ width: "600px", padding: "20px" }} spacing={2}>
        <Typography variant={"h4"}>Alerts</Typography>
        <RenderAlert warning={warning} info={info} error={error} />
        <Trigger handleChange={handleChange} />
      </Stack>
    </>
  );
};

export default App;
