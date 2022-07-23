import { useState } from "react";

const useHandleChange = () => {
  const [warning, setWarning] = useState(false);
  const [info, setInfo] = useState(false);
  const [error, setError] = useState(false); 

  const handleChange = (value) => {
    console.log("inside func", value);
    value === "warning" ? setWarning(true) : setWarning(false);
    value === "info" ? setInfo(true) : setInfo(false);
    value === "error" ? setError(true) : setError(false);
  };

  return { warning, info, error, handleChange };
};

export default useHandleChange;
