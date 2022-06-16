import React from "react";
import { Grid, Typography, Divider, IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = () => {
  return (
    <>
      <Grid
        container
        alignItems="center"
        sx={{ padding: "1rem 2rem", color: "#5C5C5C" }}
      >
        <Grid item>
          <Typography
            sx={{ marginRight: "1rem" }}
            variant="h4"
            fontWeight={700}
          >
            comfy decor
          </Typography>
        </Grid>
        <Grid item sm>
          <Typography variant="h6" fontWeight={500}>
            the furniture store
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="h6"
            fontWeight={500}
            sx={{ paddingRight: "4rem" }}
          >
            Administrator Panel
          </Typography>
        </Grid>
        <Grid item>
          <Typography fontWeight={500}>Name Surname</Typography>
        </Grid>
        <Grid item>
          <IconButton
            aria-label="logout"
            sx={{ marginLeft: "1rem", color: "#9849B0" }}
          >
            <LogoutIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Divider />
    </>
  );
};

export default Navbar;
