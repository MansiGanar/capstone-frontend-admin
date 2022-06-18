import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

interface IConfirmDeleteDialog {
  open: boolean;
  handleClose: () => void;
}

const ConfirmDeleteDialog = ({ open, handleClose }: IConfirmDeleteDialog) => {
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
      <DialogTitle>
        You are about to delete a product from your store!
      </DialogTitle>
      <DialogContent>
        <DialogContentText>Are you sure?</DialogContentText>
      </DialogContent>
      <DialogActions>
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
          No
        </Button>
        <Button
          onClick={handleClose}
          variant="contained"
          sx={{
            borderRadius: "2rem",
            background:
              "linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)",
            textTransform: "none",
          }}
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDeleteDialog;
