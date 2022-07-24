import MyAlert from "../myAlertComp/MyAlert";

const RenderAlert = (props) => {
  const { warning, info, error } = props;
  return (
    <div>
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
    </div>
  );
};

export default RenderAlert;
