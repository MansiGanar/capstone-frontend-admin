import React from "react";
import { Box, Grid } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import SideMenu from "../SideMenu/SideMenu";

interface IPageProps {
  children: JSX.Element | JSX.Element[];
}

const Page = ({ children }: IPageProps) => {
  return (
    <Box>
      <Navbar />
      <Grid container>
        <Grid
          item
          sm={2}
          sx={{
            padding: "2rem 2rem 2rem 0",
            borderRight: "1px solid rgba(0, 0, 0, 0.12)",
          }}
        >
          <SideMenu />
        </Grid>
        <Grid
          item
          sx={{
            padding: "1.5rem 4rem",
            color: "#858585",
            background: "#FFF9FE",
          }}
          sm={10}
        >
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Page;
