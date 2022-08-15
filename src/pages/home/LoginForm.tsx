import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  InputAdornment,
  Typography,
  Button,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import ForgotPasswordDialog from "./ForgotPasswordDialog";
import { loginAdmin } from "../../api/authentication/authentication";
import Loader from "../../shared-components/Loader/Loader";
import { useSnackbar } from "notistack";

const LoginForm = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const defaultFormValues = {
    email: "",
    password: "",
  };

  const [loginFormData, setLoginFormData] = useState(defaultFormValues);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLoginFormData({
      ...loginFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await loginAdmin(loginFormData);
      localStorage.setItem("token", response.token);
      setLoginFormData(defaultFormValues);
      navigate("/products");
    } catch (error: any) {
      localStorage.removeItem("token");
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
  };

  return (
    <form style={{ height: "17rem" }} onSubmit={handleSubmit}>
      <Box sx={{ padding: "0 0 1.5rem 0" }}>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
          placeholder="Email"
          sx={{ width: "100%" }}
          name="email"
          value={loginFormData.email}
          onChange={handleChange}
        />
      </Box>
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
          placeholder="Password"
          sx={{ width: "100%" }}
          name="password"
          value={loginFormData.password}
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
          Login
        </Button>
      )}
      {!loading && (
        <Link to="#" onClick={handleClickOpen}>
          <Typography
            variant="body1"
            fontWeight={500}
            sx={{ margin: "2rem 0 0", color: "#5C5C5C" }}
          >
            Forgot password?
          </Typography>
        </Link>
      )}
      <ForgotPasswordDialog open={open} handleClose={handleClose} />
    </form>
  );
};

export default LoginForm;
