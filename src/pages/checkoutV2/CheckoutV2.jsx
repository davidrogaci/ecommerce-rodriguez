import { useState, useContext } from "react";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { CartContext } from "../../context/CartContext";
import { toast } from "sonner";

const CheckoutV2 = () => {
  const navigate = useNavigate();
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");
  let total = getTotalPrice();

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      contraseña: "",
      confirme: "",
      telefono: "",
    },
    onSubmit: (data) => {
      const user = {
        nombre: data.nombre,
        email: data.email,
        telefono: data.telefono || "",
      };

      let order = {
        buyer: user,
        items: cart,
        total,
      };

      let orderCollection = collection(db, "orders");
      let productsCollection = collection(db, "products");

      cart.forEach((elemento) => {
        let refDoc = doc(productsCollection, elemento.id);
        updateDoc(refDoc, { stock: elemento.stock - elemento.quantity });
      });

      addDoc(orderCollection, order)
        .then((res) => {
          setOrderId(res.id);
          toast.success(
            `Gracias por elegirnos! Tu orden de compra es: ${res.id}`
          );
        })
        .catch()
        .finally(() => {
          clearCart();
          navigate("/");
        });
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("Este campo es obligatorio")
        .min(5, "Minimo 5 caracteres")
        .max(15, "Maximo 15 caracteres"),
      telefono: Yup.string()
        .required("Este campo es obligatorio")
        .min(8, "Minimo 8 caracteres")
        .max(15, "Maximo 15 caracteres"),
      email: Yup.string()
        .email("El email debe tener @")
        .required("Este campo es obligatorio"),
      contraseña: Yup.string()
        .required("Este campo es obligatorio")
        .matches(
          /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/,
          "Debe tener al menos un caracter especial, una mayuscula, una minuscula y un numero"
        ),
      confirme: Yup.string()
        .required("Este campo es obligatorio")
        .oneOf([Yup.ref("contraseña")], "Las contraseñas no coinciden"),
    }),
    validateOnChange: false,
  });

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginTop: "50px",
        marginLeft: "300px",
        marginRight: "300px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        border: "3px solid blue",
        borderRadius: "5px",
      }}
    >
      <h1>FINALIZAR COMPRA:</h1>
      <TextField
        variant="outlined"
        type="text"
        label="Nombre"
        name="nombre"
        onChange={handleChange}
        error={touched.nombre && errors.nombre ? true : false}
        helperText={touched.nombre && errors.nombre}
      />
      <TextField
        variant="outlined"
        type="text"
        label="Telefono"
        name="telefono"
        onChange={handleChange}
        error={touched.telefono && errors.telefono ? true : false}
        helperText={touched.telefono && errors.telefono}
      />
      <TextField
        variant="outlined"
        type="email"
        label="Email"
        name="email"
        onChange={handleChange}
        error={touched.email && errors.email ? true : false}
        helperText={touched.email && errors.email}
      />
      <TextField
        id="outlined-adornment-password"
        variant="outlined"
        type="password"
        label="Contraseña"
        name="contraseña"
        onChange={handleChange}
        error={touched.contraseña && errors.contraseña ? true : false}
        helperText={touched.contraseña && errors.contraseña}
      />
      <TextField
        variant="outlined"
        type="password"
        label="Confirmar"
        name="confirme"
        onChange={handleChange}
        error={touched.confirme && errors.confirme ? true : false}
        helperText={touched.confirme && errors.confirme}
      />
      {values.nombre === "delivery" && (
        <TextField
          variant="outlined"
          type="text"
          label="Direccion"
          name="direccion"
          onChange={handleChange}
        />
      )}
      <Button type="submit" variant="contained">
        Registrar
      </Button>
    </form>
  );
};

export default CheckoutV2;
