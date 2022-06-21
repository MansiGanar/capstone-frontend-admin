import React from "react";
import { Grid, Chip } from "@mui/material";
import ListRowActionMenu from "./ListRowActionMenu";
import ConfirmDeleteDialog from "./ConfirmDeleteDialog";
import { Product } from "../../api/products/types";

interface IListRowProps {
  product: Product;
}

const ListRow = ({ product }: IListRowProps) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid
      container
      sx={{
        border: "1px solid #F0F0F0",
        borderRadius: "2rem",
        padding: "1rem",
        marginBottom: ".7rem",
        background: "#FFFFFF",
      }}
      textAlign="center"
      alignItems="center"
    >
      <Grid item sm={3}>
        <img
          src={product.image}
          alt="product"
          style={{ borderRadius: "1rem", width: "5rem" }}
        />
      </Grid>
      <Grid item sm={2}>
        {product.name}
      </Grid>
      <Grid item sm={2}>
        {product.quantity}
      </Grid>
      <Grid item sm={2}>
        {`€ ${product.price}`}
      </Grid>
      <Grid item sm={2}>
        {product.quantity > 0 ? (
          <Chip
            label="Available"
            sx={{ background: "#0FE133", fontWeight: "700", color: "#FFFFFF" }}
          />
        ) : (
          <Chip
            label="Out Of Stock"
            sx={{ background: "#EB3232", fontWeight: "700", color: "#FFFFFF" }}
          />
        )}
      </Grid>
      <Grid item sm={1} textAlign="end">
        <ListRowActionMenu handleClickOpen={handleClickOpen} />
      </Grid>
      <ConfirmDeleteDialog open={open} handleClose={handleClose} />
    </Grid>
  );
};

export default ListRow;
