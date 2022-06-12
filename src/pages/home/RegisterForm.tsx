import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import { Box, TextField, InputAdornment, Button } from "@mui/material";

const RegisterForm = () => {
  return (
    <form style={{ height: "16rem" }}>
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
          }}
          variant="standard"
          placeholder="Password"
          sx={{ width: "100%" }}
        />
      </Box>
      <Button
        variant="contained"
        sx={{
          width: "22rem",
          borderRadius: "2rem",
          margin: "2.5rem 0 0",
        }}
      >
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
