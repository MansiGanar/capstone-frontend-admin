import React, { useEffect, useState } from "react";
import { Typography, Grid, Box } from "@mui/material";
import Page from "../../shared-components/Page/Page";
import ListHeader from "./ListHeader";
import ListRow from "./ListRow";
import { getAllOrders } from "../../api/orders/orders";
import { useSnackbar } from "notistack";
import { Order } from "../../api/orders/types";
import Loader from "../../shared-components/Loader/Loader";

const Orders = () => {
  const token = localStorage.getItem("token");

  const [ordersList, setOrdersList] = useState<Order[]>([]);

  const [loading, setLoading] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const getOrdersList = async () => {
    if (token) {
      setLoading(true);
      try {
        const response = await getAllOrders(token);
        setOrdersList(response);
      } catch (error: any) {
        setOrdersList([]);
        enqueueSnackbar(
          error?.response?.data?.errors[0]?.msg ||
            error?.response?.data?.msg ||
            "An error occurred. Please try again.",
          {
            variant: "error",
          }
        );
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    getOrdersList();
    //eslint-disable-next-line
  }, []);

  return (
    <Page>
      <Typography
        fontWeight={700}
        fontSize={16}
        sx={{ marginBottom: "1rem", marginTop: "1rem" }}
      >
        Orders Management
      </Typography>
      <Grid container>
        <Grid item sm>
          <Typography fontWeight={700} fontSize={24}>
            Orders
          </Typography>
        </Grid>
      </Grid>
      {loading ? (
        <Box sx={{ textAlign: "center", marginTop: "5rem" }}>
          <Loader />
        </Box>
      ) : (
        <Box
          sx={{
            padding: "3rem",
            border: "2px solid #F0F0F0",
            borderRadius: ".5rem",
            marginTop: "2rem",
            background: "#FFFFFF",
          }}
        >
          <ListHeader />
          {ordersList.map((order) => (
            <ListRow order={order} getOrdersList={getOrdersList} />
          ))}
        </Box>
      )}
    </Page>
  );
};

export default Orders;
