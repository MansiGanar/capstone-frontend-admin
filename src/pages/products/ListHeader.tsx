import React from "react";
import { Grid } from "@mui/material";

interface IListHeaderProps {
  category: string;
}

const ListHeader = ({ category }: IListHeaderProps) => {
  return (
    <Grid
      container
      sx={{ marginBottom: "1.5rem", background: "#FFFFFF" }}
      textAlign="center"
    >
      <Grid item sx={{ fontWeight: "700" }} sm={2}>
        Product Image
      </Grid>
      <Grid item sx={{ fontWeight: "700" }} sm={category === "all" ? 2 : 3}>
        Product Name
      </Grid>
      {category === "all" && (
        <Grid item sx={{ fontWeight: "700" }} sm={2}>
          Product Category
        </Grid>
      )}
      <Grid item sx={{ fontWeight: "700" }} sm={category === "all" ? 1 : 2}>
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
