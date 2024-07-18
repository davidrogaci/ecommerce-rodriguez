import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const CheckoutFormik = () => {
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: { nombre: "", email: "", contraseña: "", confirme: "" },
    onSubmit: (data) => {
      console.log("se envia");
      console.log(data);
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("Este campo es obligatorio")
        .min(5, "Minimo 5")
        .max(15, "Maximo 15"),
      email: Yup.string()
        .email("El email debe tener @")
        .required("Este campo es obligatorio"),
      contraseña: Yup.string()
        .required("Este campo es obligatorio")
        .matches(
          /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/,
          "Debe tener algun caracter especial"
        ),
      confirm: Yup.string()
        .required("Este campo es obligatorio")
        .oneOf([Yup.ref("Contraseña")], "Las contraseñas no coinciden"),
    }),
    validateOnChange: false,
  });

  console.log(errors);
  console.log(errors.nombre);

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        margin: "50px",
        display: "flex",
        flexDirection: "column",
        width: "50%",
        gap: "20px",
      }}
    >
      <TextField
        variant="outlined"
        type="text"
        label="Nombre"
        name="nombre"
        onChange={handleChange}
        error={errors.nombre ? true : false}
        helperText={errors.nombre}
      />
      <TextField
        variant="outlined"
        type="text"
        label="Email"
        name="email"
        onChange={handleChange}
        error={errors.email ? true : false}
        helperText={errors.email}
      />
      <TextField
        variant="outlined"
        type="password"
        label="Contraseña"
        name="contraseña"
        onChange={handleChange}
        error={errors.contraseña ? true : false}
        helperText={errors.contraseña}
      />
      <TextField
        variant="outlined"
        type="password"
        label="Confirmar"
        onChange={handleChange}
        name="confirme"
        error={errors.confirme ? true : false}
        helperText={errors.confirme}
      />
      {values.nombre === "delivery" && (
        <TextField
          variant="outlined"
          type="text"
          label="Direccion"
          onChange={handleChange}
          name="confirmar"
        />
      )}
      <Button type="submit" variant="contained">
        Registrar
      </Button>
    </form>
  );
};

export default CheckoutFormik;
