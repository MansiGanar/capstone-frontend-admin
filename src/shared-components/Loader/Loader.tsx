import React from "react";
import { CircularProgress, CircularProgressProps } from "@mui/material";

const Loader = (props: CircularProgressProps) => {
  return (
    <CircularProgress
      {...props}
      sx={{ ...props.sx, marginTop: "2.5rem", color: "#9849B0" }}
    />
  );
};

export default Loader;
