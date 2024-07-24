import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export const ProductCart = ({ title, description, price, img }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardMedia
        component="img"
        sx={{ height: 200, objectFit: "cover" }}
        image={img}
        alt={`Imagen de ${title}`}
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
    </Card>
  );
};
