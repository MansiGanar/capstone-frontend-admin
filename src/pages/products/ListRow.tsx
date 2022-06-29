import React from "react";
import { Grid, Chip } from "@mui/material";
import ListRowActionMenu from "./ListRowActionMenu";
import ConfirmDeleteDialog from "./ConfirmDeleteDialog";
import { Product } from "../../api/products/types";
import ViewProductDetailsDialog from "./ViewProductDetailsDialog";
import ProductForm from "./ProductForm";

interface IListRowProps {
  product: Product;
  getProducts: () => Promise<void>;
}

const ListRow = ({ product, getProducts }: IListRowProps) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [openDetails, setOpenDetails] = React.useState(false);

  const handleClickOpenDetails = () => {
    setOpenDetails(true);
  };

  const handleCloseDetails = () => {
    setOpenDetails(false);
  };

  const [openEditProductForm, setOpenEditProductForm] = React.useState(false);

  const handleClickOpenEditProductForm = () => {
    setOpenEditProductForm(true);
  };

  const handleCloseEditProductForm = () => {
    setOpenEditProductForm(false);
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
            sx={{
              background: "#0FE133",
              fontWeight: "700",
              color: "#FFFFFF",
              width: "7rem",
            }}
          />
        ) : (
          <Chip
            label="Out Of Stock"
            sx={{
              background: "#EB3232",
              fontWeight: "700",
              color: "#FFFFFF",
              width: "7rem",
            }}
          />
        )}
      </Grid>
      <Grid item sm={1} textAlign="end">
        <ListRowActionMenu
          handleClickOpen={handleClickOpen}
          handleViewOpen={handleClickOpenDetails}
          handleClickEditOpen={handleClickOpenEditProductForm}
        />
      </Grid>
      <ConfirmDeleteDialog
        open={open}
        handleClose={handleClose}
        productId={product._id}
        getProducts={getProducts}
      />
      <ViewProductDetailsDialog
        open={openDetails}
        handleClose={handleCloseDetails}
        productId={product._id}
      />
      <ProductForm
        open={openEditProductForm}
        handleClose={handleCloseEditProductForm}
        formType={"EDIT"}
        productId={product._id}
        getProducts={getProducts}
      />
    </Grid>
  );
};

export default ListRow;
