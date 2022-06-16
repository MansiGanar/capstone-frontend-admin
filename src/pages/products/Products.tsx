import React from "react";
import { Typography, Box, Grid, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Page from "../../shared-components/Page/Page";
import ListHeader from "./ListHeader";
import ListRow from "./ListRow";

const Products = () => {
  return (
    <Page>
      <Typography
        fontWeight={700}
        fontSize={16}
        sx={{ marginBottom: "1rem", marginTop: "1rem" }}
      >
        Products Management
      </Typography>
      <Grid container>
        <Grid item sm>
          <Typography fontWeight={700} fontSize={24}>
            Products
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              borderRadius: "2rem",
              textTransform: "none",
              padding: ".5rem 2rem",
              background:
                "linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)",
            }}
          >
            Add Product
          </Button>
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
        <Box sx={{ textAlign: "center", margin: "2rem 0 -1rem " }}>
          <Button
            variant="contained"
            sx={{
              borderRadius: "2rem",
              textTransform: "none",
              padding: ".5rem 2rem",
              background:
                "linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)",
            }}
          >
            View More
          </Button>
        </Box>
      </Box>
    </Page>
  );
};

export default Products;
