import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import { IForgotPasswordDialog } from "./types";

const ForgotPasswordDialog = ({ open, handleClose }: IForgotPasswordDialog) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "2rem",
          padding: "1rem",
        },
      }}
    >
      <DialogTitle>Forgot password?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please enter your email address to get the link to reset your
          account's password.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          variant="outlined"
          sx={{ borderRadius: "2rem" }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleClose}
          variant="contained"
          sx={{ borderRadius: "2rem" }}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ForgotPasswordDialog;
