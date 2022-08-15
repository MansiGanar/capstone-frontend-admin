import React, { useState } from "react";
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
import { sendPasswordResetEmail } from "../../api/authentication/authentication";
import { useSnackbar } from "notistack";
import Loader from "../../shared-components/Loader/Loader";

const ForgotPasswordDialog = ({ open, handleClose }: IForgotPasswordDialog) => {
  const [emailId, setEmailId] = useState("");

  const [loading, setLoading] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setLoading(true);
    try {
      await sendPasswordResetEmail({ emailId });
      enqueueSnackbar("Password reset email sent successfully!", {
        variant: "success",
      });
      handleClose();
    } catch (error: any) {
      enqueueSnackbar(
        error?.response?.data?.errors[0]?.msg ||
          error?.response?.data?.msg ||
          "An error occurred. Please try again.",
        {
          variant: "error",
        }
      );
    }
    setLoading(false);
  };

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
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
          value={emailId}
          onChange={(e) => setEmailId(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Button
              onClick={handleClose}
              variant="outlined"
              sx={{
                borderRadius: "2rem",
                color: "#9849B0",
                borderColor: "#9849B0",
                ":hover": {
                  borderColor: "#9849B0",
                },
                textTransform: "none",
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              variant="contained"
              sx={{
                borderRadius: "2rem",
                background:
                  "linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)",
                textTransform: "none",
              }}
            >
              Submit
            </Button>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default ForgotPasswordDialog;
