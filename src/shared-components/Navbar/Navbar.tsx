import React, { useEffect, useState } from "react";
import { Grid, Typography, Divider, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { GetProfileResponse } from "../../api/authentication/types";
import { useSnackbar } from "notistack";
import { getAdminProfile } from "../../api/authentication/authentication";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const [response, setResponse] = useState<GetProfileResponse | null>(null);

  const { enqueueSnackbar } = useSnackbar();

  const token = localStorage.getItem("token");

  const getProfileData = async () => {
    if (token) {
      try {
        const response = await getAdminProfile(token);
        setResponse(response);
      } catch (error: any) {
        enqueueSnackbar(
          error?.response?.data?.errors[0]?.msg ||
            error?.response?.data?.msg ||
            "An error occurred. Please try again.",
          {
            variant: "error",
          }
        );
        setResponse(null);
      }
    }
  };

  useEffect(() => {
    getProfileData();
    // eslint-disable-next-line
  }, []);

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
          <Typography fontWeight={500}>
            {`${response?.firstName || ""} ${response?.lastName || ""}`}
          </Typography>
        </Grid>
        <Grid item>
          <IconButton
            aria-label="logout"
            sx={{ marginLeft: "1rem", color: "#9849B0" }}
            onClick={logout}
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
