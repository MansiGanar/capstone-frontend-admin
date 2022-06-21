import React from "react";
import { Grid, Chip } from "@mui/material";
import ConfirmCancelDialog from "./ConfirmCancelDialog";
import ConfirmCompleteDialog from "./ConfirmCompleteDialog";
import ListRowActionMenu from "./ListRowActionMenu";

const ListRow = () => {
  const [openCancel, setOpenCancel] = React.useState(false);
  const [openComplete, setOpenComplete] = React.useState(false);

  const handleClickOpen = (menuItemName: string) => {
    menuItemName === "cancel" && setOpenCancel(true);
    menuItemName === "complete" && setOpenComplete(true);
  };

  const handleClose = () => {
    setOpenCancel(false);
    setOpenComplete(false);
  };

  return (
    <Grid
      container
      sx={{
        border: "1px solid #F0F0F0",
        borderRadius: "2rem",
        padding: "1rem",
        marginBottom: ".7rem",
        background: "#FFFFFF",
      }}
      textAlign="center"
      alignItems="center"
    >
      <Grid item sm={2}>
        14/04/2022
      </Grid>
      <Grid item sm={3}>
        #REF67657655NHJ
      </Grid>
      <Grid item sm={2}>
        John Hopkins
      </Grid>
      <Grid item sm={2}>
        $ 987.87
      </Grid>
      <Grid item sm={2}>
        <Chip
          label="In progress"
          sx={{
            background:
              "linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)",
            fontWeight: "700",
            color: "#FFFFFF",
          }}
        />
        {/* <Chip
          label="Cancelled"
          sx={{ background: "#EB3232", fontWeight: "700", color: "#FFFFFF" }}
        />
        <Chip
          label="Completed"
          sx={{ background: "#0FE133", fontWeight: "700", color: "#FFFFFF" }}
        /> */}
      </Grid>
      <Grid item sm={1} textAlign="end">
        <ListRowActionMenu handleClickOpen={handleClickOpen} />
      </Grid>
      <ConfirmCancelDialog open={openCancel} handleClose={handleClose} />
      <ConfirmCompleteDialog open={openComplete} handleClose={handleClose} />
    </Grid>
  );
};

export default ListRow;
