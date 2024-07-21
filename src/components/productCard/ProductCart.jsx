import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export const ProductCart = ({ title, description, price, id, img }) => {
  return (
    <Card sx={{ width: 345 }}>
      <CardMedia
        component={"img"}
        sx={{ height: 200, width: "100%", objectFit: "cover" }}
        image={img}
        title="green iguana"
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
