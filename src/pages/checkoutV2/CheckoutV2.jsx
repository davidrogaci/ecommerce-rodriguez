import { useContext } from "react";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { CartContext } from "../../context/CartContext";
import { toast } from "sonner";
import "./CheckoutV2.css";

const CheckoutV2 = () => {
  const navigate = useNavigate();
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const total = getTotalPrice();

  const formik = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      contraseña: "",
      confirme: "",
      telefono: "",
    },
    onSubmit: async (data) => {
      try {
        const user = {
          nombre: data.nombre,
          email: data.email,
          telefono: data.telefono || "",
        };

        const order = {
          buyer: user,
          items: cart,
          total,
        };

        const orderCollection = collection(db, "orders");
        const productsCollection = collection(db, "products");

        for (const item of cart) {
          const refDoc = doc(productsCollection, item.id);
          await updateDoc(refDoc, { stock: item.stock - item.quantity });
        }

        const res = await addDoc(orderCollection, order);
        toast.success(
          `Gracias por elegirnos! Tu orden de compra es: ${res.id}`
        );
        clearCart();
        navigate("/");
      } catch (error) {
        toast.error(
          "Ocurrió un error al procesar tu orden. Inténtalo nuevamente."
        );
      }
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
    <form onSubmit={formik.handleSubmit} className="checkoutForm">
      <h1>FINALIZAR COMPRA:</h1>
      <TextField
        variant="outlined"
        type="text"
        label="Nombre"
        name="nombre"
        onChange={formik.handleChange}
        error={formik.touched.nombre && formik.errors.nombre}
        helperText={formik.touched.nombre && formik.errors.nombre}
      />
      <TextField
        variant="outlined"
        type="text"
        label="Telefono"
        name="telefono"
        onChange={formik.handleChange}
        error={formik.touched.telefono && formik.errors.telefono}
        helperText={formik.touched.telefono && formik.errors.telefono}
      />
      <TextField
        variant="outlined"
        type="email"
        label="Email"
        name="email"
        onChange={formik.handleChange}
        error={formik.touched.email && formik.errors.email}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        id="outlined-adornment-password"
        variant="outlined"
        type="password"
        label="Contraseña"
        name="contraseña"
        onChange={formik.handleChange}
        error={formik.touched.contraseña && formik.errors.contraseña}
        helperText={formik.touched.contraseña && formik.errors.contraseña}
      />
      <TextField
        variant="outlined"
        type="password"
        label="Confirmar"
        name="confirme"
        onChange={formik.handleChange}
        error={formik.touched.confirme && formik.errors.confirme}
        helperText={formik.touched.confirme && formik.errors.confirme}
      />
      {formik.values.nombre === "delivery" && (
        <TextField
          variant="outlined"
          type="text"
          label="Dirección"
          name="direccion"
          onChange={formik.handleChange}
        />
      )}
      <Button type="submit" variant="contained">
        Registrar
      </Button>
    </form>
  );
};

export default CheckoutV2;
