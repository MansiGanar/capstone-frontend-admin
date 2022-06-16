import React from "react";
import { Grid } from "@mui/material";

const ListHeader = () => {
  return (
    <Grid
      container
      sx={{ marginBottom: "1.5rem", background: "#FFFFFF" }}
      textAlign="center"
    >
      <Grid item sx={{ fontWeight: "700" }} sm={3}>
        Product Image
      </Grid>
      <Grid item sx={{ fontWeight: "700" }} sm={2}>
        Product Name
      </Grid>
      <Grid item sx={{ fontWeight: "700" }} sm={2}>
        Product Quantity
      </Grid>
      <Grid item sx={{ fontWeight: "700" }} sm={2}>
        Product Price
      </Grid>
      <Grid item sx={{ fontWeight: "700" }} sm={2}>
        Product Availability
      </Grid>
      <Grid item sx={{ fontWeight: "700" }} sm={1}>
        Actions
      </Grid>
    </Grid>
  );
};

export default ListHeader;
