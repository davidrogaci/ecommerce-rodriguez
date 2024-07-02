import Button from "@mui/material/Button";
export const Counter = ({ restar, contador, sumar }) => {
  return (
    <div>
      <Button variant="contained" onClick={restar}>
        Restar
      </Button>
      <h2> {contador} </h2>
      <Button variant="contained" onClick={sumar}>
        Sumar
      </Button>
    </div>
  );
};
