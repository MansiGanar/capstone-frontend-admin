import React, { useState } from "react";
import { useSnackbar } from "notistack";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import { Box, TextField, InputAdornment, Button } from "@mui/material";
import { registerAdmin } from "../../api/authentication/authentication";
import { useNavigate } from "react-router-dom";
import Loader from "../../shared-components/Loader/Loader";

const RegisterForm = () => {
  const defaultFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const [registerFormData, setRegisterFormData] = useState(defaultFormValues);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRegisterFormData({
      ...registerFormData,
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
      const response = await registerAdmin(registerFormData);
      localStorage.setItem("token", response.token);
      setRegisterFormData(defaultFormValues);
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
    <>
      <form style={{ height: "17rem" }} onSubmit={handleSubmit}>
        <Box sx={{ margin: "0 0 1.5rem 0" }}>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
            placeholder="First Name"
            sx={{ width: "100%" }}
            value={registerFormData.firstName}
            onChange={handleChange}
            name="firstName"
          />
        </Box>
        <Box sx={{ margin: "0 0 1.5rem 0" }}>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
            placeholder="Last Name"
            sx={{ width: "100%" }}
            value={registerFormData.lastName}
            onChange={handleChange}
            name="lastName"
          />
        </Box>
        <Box sx={{ margin: "0 0 1.5rem 0" }}>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
            placeholder="Email"
            sx={{ width: "100%" }}
            value={registerFormData.email}
            onChange={handleChange}
            name="email"
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
            value={registerFormData.password}
            onChange={handleChange}
            name="password"
          />
        </Box>
        {loading ? (
          <Loader />
        ) : (
          <Button
            variant="contained"
            sx={{
              width: "19rem",
              borderRadius: "2rem",
              margin: "2.5rem 0 0",
              textTransform: "none",
              padding: ".5rem 2rem",
              background:
                "linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)",
            }}
            onClick={handleSubmit}
          >
            Register
          </Button>
        )}
      </form>
    </>
  );
};

export default RegisterForm;
