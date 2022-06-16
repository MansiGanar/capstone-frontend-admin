import React from "react";
import { Link } from "react-router-dom";
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

const LoginForm = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <form style={{ height: "17rem" }}>
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
          textTransform: "none",
          padding: ".5rem 2rem",
          background:
            "linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)",
        }}
      >
        Login
      </Button>
      <Link to="#" onClick={handleClickOpen}>
        <Typography
          variant="body1"
          fontWeight={500}
          sx={{ margin: "2rem 0 0", color: "#5C5C5C" }}
        >
          Forgot password?
        </Typography>
      </Link>
      <ForgotPasswordDialog open={open} handleClose={handleClose} />
    </form>
  );
};

export default LoginForm;
