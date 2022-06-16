import React from "react";
import { Grid, Chip } from "@mui/material";
import ListRowActionMenu from "./ListRowActionMenu";

const ListRow = () => {
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
          src={"https://mui.com/static/images/cards/paella.jpg"}
          alt="product"
          style={{ borderRadius: "1rem", width: "5rem" }}
        />
      </Grid>
      <Grid item sm={2}>
        name
      </Grid>
      <Grid item sm={2}>
        quantity
      </Grid>
      <Grid item sm={2}>
        price
      </Grid>
      <Grid item sm={2}>
        <Chip
          label="Available"
          sx={{ background: "#5DF888", fontWeight: "700", color: "#FFFFFF" }}
        />
        {/* <Chip
          label="Out Of Stock"
          sx={{ background: "#F85D5D", fontWeight: "700", color: "#FFFFFF" }}
        /> */}
      </Grid>
      <Grid item sm={1} textAlign="end">
        <ListRowActionMenu />
      </Grid>
    </Grid>
  );
};

export default ListRow;
