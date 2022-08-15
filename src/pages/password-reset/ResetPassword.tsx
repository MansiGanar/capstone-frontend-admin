import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Divider,
  InputAdornment,
  TextField,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import KeyIcon from "@mui/icons-material/Key";
import { backgroundStyle, cardStyle } from "../home/styles";
import { resetPassword } from "../../api/authentication/authentication";
import { useSnackbar } from "notistack";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../shared-components/Loader/Loader";

const ResetPassword = () => {
  const defaultFormValues = {
    password1: "",
    password2: "",
  };

  const [resetPasswordFormData, setResetPasswordFormData] =
    useState(defaultFormValues);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setResetPasswordFormData({
      ...resetPasswordFormData,
      [event.target.name]: event.target.value,
    });
  };

  const { token } = useParams();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (resetPasswordFormData.password1 === resetPasswordFormData.password2) {
      setLoading(true);
      try {
        const response = await resetPassword(
          {
            password: resetPasswordFormData.password1,
          },
          token || ""
        );
        setResetPasswordFormData(defaultFormValues);
        navigate("/");
        enqueueSnackbar(response.msg, {
          variant: "success",
        });
      } catch (error: any) {
        enqueueSnackbar(
          error?.response?.data?.msg ||
            error?.response?.data?.errors[0]?.msg ||
            "An error occurred. Please try again.",
          {
            variant: "error",
          }
        );
      }
      setLoading(false);
    } else {
      enqueueSnackbar("The passwords do not match! Please try again.", {
        variant: "error",
      });
    }
  };

  return (
    <Box sx={backgroundStyle}>
      <Grid
        container
        alignItems={"center"}
        sx={{ height: "100%", padding: "5rem 10rem 5rem 0" }}
      >
        <Grid item sm={8}></Grid>
        <Grid item sm={4}>
          <Card sx={cardStyle}>
            <CardContent>
              <Box sx={{ padding: "2rem 5rem", color: "#5C5C5C" }}>
                <Typography variant="h5" fontWeight={700}>
                  comfy decor
                </Typography>
                <Typography variant="h6" fontWeight={500}>
                  the furniture store
                </Typography>
                <Divider sx={{ margin: "1rem 0" }} />
                <Typography
                  variant="body1"
                  sx={{ margin: "1rem" }}
                  fontWeight={700}
                >
                  Adminstrator Panel
                </Typography>
                <Typography mt={3} mb={3} fontWeight={700} fontSize={18}>
                  Please enter a new password
                </Typography>
                <Box>
                  <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <KeyIcon />
                        </InputAdornment>
                      ),
                      type: "password",
                    }}
                    variant="standard"
                    placeholder="New Password"
                    sx={{ width: "100%" }}
                    name="password1"
                    value={resetPasswordFormData.password1}
                    onChange={handleChange}
                  />
                </Box>
                <Box mt={3}>
                  <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <KeyIcon />
                        </InputAdornment>
                      ),
                      type: "password",
                    }}
                    variant="standard"
                    placeholder="Confirm New Password"
                    sx={{ width: "100%" }}
                    name="password2"
                    value={resetPasswordFormData.password2}
                    onChange={handleChange}
                  />
                </Box>
                {loading ? (
                  <Loader />
                ) : (
                  <Button
                    variant="contained"
                    sx={{
                      width: "22rem",
                      borderRadius: "2rem",
                      margin: "2.5rem 0 0",
                      textTransform: "none",
                      padding: ".5rem 2rem",
                      background:
                        "linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)",
                    }}
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                )}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResetPassword;
