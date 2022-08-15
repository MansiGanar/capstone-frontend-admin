import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { getOrderById } from "../../api/orders/orders";
import { useSnackbar } from "notistack";
import { Order } from "../../api/orders/types";
import { formatOrderId, formatPrice } from "../../utils/helpers";
import Loader from "../../shared-components/Loader/Loader";
import { IViewOrderDialog } from "./types";

const ViewOrderDialog = ({ open, handleClose, orderId }: IViewOrderDialog) => {
  const token = localStorage.getItem("token");

  const [orderDetails, setOrderDetails] = useState<Order>();

  const [loading, setLoading] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const getOrderDetails = async () => {
    if (token) {
      setLoading(true);
      try {
        const response = await getOrderById(orderId, token);
        setOrderDetails(response);
      } catch (error: any) {
        setOrderDetails(undefined);
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

  useEffect(() => {
    open && getOrderDetails();
    //eslint-disable-next-line
  }, [open]);

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
      fullWidth
      maxWidth="lg"
    >
      <DialogTitle>Order Number: {formatOrderId(orderId)}</DialogTitle>
      <DialogContent>
        {loading ? (
          <Loader />
        ) : (
          <Box pt="1rem" pb="1rem">
            <Typography fontWeight={700} mb={3}>
              Ordered On: {orderDetails?.date || "-"}
            </Typography>
            <Typography fontWeight={700} mb={3}>
              Ordered Status: {orderDetails?.status || "-"}
            </Typography>
            <Grid container mb={3}>
              <Grid item sm={6} pr="2rem">
                <Typography fontWeight={700}>Full Name</Typography>
                {`${orderDetails?.firstName || "-"} ${
                  orderDetails?.lastName || "-"
                }`}
              </Grid>
              <Grid item sm={6}>
                <Typography fontWeight={700}>Email</Typography>
                {orderDetails?.email || "-"}
              </Grid>
            </Grid>
            <Grid container mb={3}>
              <Grid item sm={6} pr="2rem">
                <Typography fontWeight={700}>Delivery Address</Typography>
                {orderDetails?.deliveryAddress || "-"}
              </Grid>
              <Grid item sm={6}>
                <Typography fontWeight={700}>Delivery Method</Typography>
                {orderDetails?.deliveryMethod || "-"}
              </Grid>
            </Grid>
            <Typography fontWeight={700} mb={2}>
              Order Items
            </Typography>
            <Grid container spacing="2rem" mb={2}>
              <Grid item sm={3}>
                Sr. No.
              </Grid>
              <Grid item sm={3}>
                Product Image
              </Grid>
              <Grid item sm={3}>
                Quantity
              </Grid>
              <Grid item sm={3}>
                Subtotal
              </Grid>
            </Grid>
            {orderDetails?.orderItems?.map((orderItem, index) => (
              <Grid container spacing="2rem">
                <Grid item sm={3}>{`${index + 1}.`}</Grid>
                <Grid item sm={3}>
                  <img
                    src={orderItem?.itemInCart?.image}
                    alt="product"
                    style={{ width: "4rem" }}
                  />
                </Grid>
                <Grid item sm={3}>
                  {orderItem?.quantity}
                </Grid>
                <Grid item sm={3}>
                  {orderItem?.subtotal}
                </Grid>
              </Grid>
            ))}
            <Grid container mt={3}>
              <Grid item sm={6} pr="2rem">
                <Typography fontWeight={700}>Payment Method</Typography>
                {orderDetails?.paymentMethod || "-"}
              </Grid>
              <Grid item sm={6}>
                <Typography fontWeight={700}>Total Cost</Typography>
                {formatPrice(orderDetails?.totalCost || "-")}
              </Grid>
            </Grid>
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          variant="contained"
          sx={{
            borderRadius: "2rem",
            background:
              "linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)",
            textTransform: "none",
          }}
          disabled={loading}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ViewOrderDialog;
