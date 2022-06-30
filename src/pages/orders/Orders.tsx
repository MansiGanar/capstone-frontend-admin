import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import Page from "../../shared-components/Page/Page";
import ListHeader from "./ListHeader";
import ListRow from "./ListRow";

const Orders = () => {
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
        <ListRow />
        <ListRow />
        <ListRow />
        <ListRow />
        <ListRow />
      </Box>
    </Page>
  );
};

export default Orders;
