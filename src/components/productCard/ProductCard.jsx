import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export const ProductCard = ({ title, description, price, id, img }) => {
  return (
    <Card sx={{ width: 345, m: 2, boxShadow: 3 }}>
      <CardMedia
        component="img"
        sx={{ height: 200, objectFit: "cover" }}
        image={img}
        alt={`Imagen de ${title}`} // Mejorando la accesibilidad
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="h5" color="primary">
          ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${id}`} style={{ textDecoration: "none" }}>
          <Button size="small" color="primary" variant="outlined">
            Ver más
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
