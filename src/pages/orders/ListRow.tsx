import React from "react";
import { Grid, Chip } from "@mui/material";
import ConfirmCancelDialog from "./ConfirmCancelDialog";
import ConfirmCompleteDialog from "./ConfirmCompleteDialog";
import ListRowActionMenu from "./ListRowActionMenu";
import ViewOrderDialog from "./ViewOrderDialog";
import { IListRowProps } from "./types";
import { formatOrderId, formatPrice } from "../../utils/helpers";

const ListRow = ({ order, getOrdersList }: IListRowProps) => {
  const [openCancel, setOpenCancel] = React.useState(false);
  const [openComplete, setOpenComplete] = React.useState(false);
  const [openView, setOpenView] = React.useState(false);

  const handleClickOpen = (menuItemName: string) => {
    menuItemName === "cancel" && setOpenCancel(true);
    menuItemName === "complete" && setOpenComplete(true);
    menuItemName === "view" && setOpenView(true);
  };

  const handleClose = () => {
    setOpenCancel(false);
    setOpenComplete(false);
    setOpenView(false);
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
      <Grid item sm={2}>
        {order.date}
      </Grid>
      <Grid item sm={3} sx={{ wordBreak: "break-word" }}>
        {formatOrderId(order._id)}
      </Grid>
      <Grid item sm={2}>
        {order.firstName + order.lastName}
      </Grid>
      <Grid item sm={2}>
        {formatPrice(order.totalCost)}
      </Grid>
      <Grid item sm={2}>
        {order.status === "In progress" && (
          <Chip
            label="In progress"
            sx={{
              background:
                "linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)",
              fontWeight: "700",
              color: "#FFFFFF",
            }}
          />
        )}
        {order.status === "Cancelled" && (
          <Chip
            label="Cancelled"
            sx={{ background: "#EB3232", fontWeight: "700", color: "#FFFFFF" }}
          />
        )}
        {order.status === "Completed" && (
          <Chip
            label="Completed"
            sx={{ background: "#0FE133", fontWeight: "700", color: "#FFFFFF" }}
          />
        )}
      </Grid>
      <Grid item sm={1} textAlign="end">
        <ListRowActionMenu
          handleClickOpen={handleClickOpen}
          orderStatus={order.status}
        />
      </Grid>
      <ConfirmCancelDialog
        open={openCancel}
        handleClose={handleClose}
        orderId={order._id}
        getOrdersList={getOrdersList}
      />
      <ConfirmCompleteDialog
        open={openComplete}
        handleClose={handleClose}
        orderId={order._id}
        getOrdersList={getOrdersList}
      />
      <ViewOrderDialog
        open={openView}
        handleClose={handleClose}
        orderId={order._id}
      />
    </Grid>
  );
};

export default ListRow;
