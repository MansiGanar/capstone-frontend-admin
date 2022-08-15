import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { cancelAnOrder } from "../../api/orders/orders";
import { useSnackbar } from "notistack";
import Loader from "../../shared-components/Loader/Loader";
import { IConfirmDeleteDialog } from "./types";

const ConfirmDeleteDialog = ({
  open,
  handleClose,
  orderId,
  getOrdersList,
}: IConfirmDeleteDialog) => {
  const token = localStorage.getItem("token");

  const [loading, setLoading] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const handleCancelOrder = async () => {
    if (token) {
      setLoading(true);
      try {
        const response = await cancelAnOrder(orderId, token);
        enqueueSnackbar(response.msg, {
          variant: "success",
        });
        handleClose();
        getOrdersList();
      } catch (error: any) {
        enqueueSnackbar(
          error?.response?.data?.msg || "An error occurred. Please try again.",
          {
            variant: "error",
          }
        );
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
      <DialogTitle>You are about to cancel an order!</DialogTitle>
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
              onClick={handleCancelOrder}
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
