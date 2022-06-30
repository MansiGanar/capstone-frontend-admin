import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

interface IViewOrderDialog {
  open: boolean;
  handleClose: () => void;
}

const ViewOrderDialog = ({ open, handleClose }: IViewOrderDialog) => {
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
      <DialogTitle>Order Number: #3234234</DialogTitle>
      <DialogContent></DialogContent>
      <DialogActions>
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
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ViewOrderDialog;
