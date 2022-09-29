import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { deleteProduct } from "../../api/products/products";
import { useSnackbar } from "notistack";
import Loader from "../../shared-components/Loader/Loader";

interface IConfirmDeleteDialog {
  open: boolean;
  handleClose: () => void;
  productId: string;
  getProducts: () => Promise<void>;
}

const ConfirmDeleteDialog = ({
  open,
  handleClose,
  getProducts,
  productId,
}: IConfirmDeleteDialog) => {
  const token = localStorage.getItem("token");

  const [loading, setLoading] = useState(false);

  const { enqueueSnackbar } = useSnackbar();
  const removeProduct = async () => {
    if (token) {
      setLoading(true);
      try {
        const response = await deleteProduct(productId, token);
        enqueueSnackbar(response.msg, {
          variant: "success",
        });
        handleClose();
        getProducts();
      } catch (error: any) {
        enqueueSnackbar(
          error?.response?.data?.errors[0]?.msg ||
            error?.response?.data?.msg ||
            "An error occurred. Please try again.",
          {
            variant: "error",
          }
        );
        handleClose();
      }
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "2rem",
          padding: "1rem",
        },
      }}
    >
      <DialogTitle>
        You are about to delete a product from your store!
      </DialogTitle>
      <DialogContent>
        <DialogContentText>Are you sure?</DialogContentText>
      </DialogContent>
      <DialogActions>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Button
              onClick={handleClose}
              variant="outlined"
              sx={{
                borderRadius: "2rem",
                color: "#9849B0",
                borderColor: "#9849B0",
                ":hover": {
                  borderColor: "#9849B0",
                },
                textTransform: "none",
              }}
            >
              No
            </Button>
            <Button
              onClick={removeProduct}
              variant="contained"
              sx={{
                borderRadius: "2rem",
                background:
                  "linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)",
                textTransform: "none",
              }}
            >
              Yes
            </Button>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDeleteDialog;
