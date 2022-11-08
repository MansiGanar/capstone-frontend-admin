import React from "react";
import { Grid } from "@mui/material";

const ListHeader = () => {
  return (
    <Grid
      container
      sx={{ marginBottom: "1.5rem", background: "#FFFFFF" }}
      textAlign="center"
    >
      <Grid item sx={{ fontWeight: "700" }} sm={2}>
        Date
      </Grid>
      <Grid item sx={{ fontWeight: "700" }} sm={2}>
        Order ID
      </Grid>
      <Grid item sx={{ fontWeight: "700" }} sm={3}>
        Customer Name
      </Grid>
      <Grid item sx={{ fontWeight: "700" }} sm={2}>
        Order Amount
      </Grid>
      <Grid item sx={{ fontWeight: "700" }} sm={2}>
        Order Status
      </Grid>
      <Grid item sx={{ fontWeight: "700" }} sm={1}>
        Actions
      </Grid>
    </Grid>
  );
};

export default ListHeader;
