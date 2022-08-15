import React from "react";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IListRowActionMenuProps } from "./types";

const ListRowActionMenu = ({
  handleClickOpen,
  orderStatus,
}: IListRowActionMenuProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const isDisabled = orderStatus === "Cancelled" || orderStatus === "Completed";

  return (
    <Box>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          "& .MuiPaper-root": { borderRadius: ".7rem" },
          "& .MuiList-root": { padding: 0 },
        }}
      >
        <MenuItem
          onClick={() => {
            handleClickOpen("view");
            handleClose();
          }}
          sx={{ color: "#858585", padding: ".5rem 1rem" }}
        >
          View
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClickOpen("cancel");
            handleClose();
          }}
          sx={{ color: "#858585", padding: ".5rem 1rem" }}
          disabled={isDisabled}
        >
          Cancel
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClickOpen("complete");
            handleClose();
          }}
          sx={{ color: "#858585", padding: ".5rem 1rem" }}
          disabled={isDisabled}
        >
          Complete
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default ListRowActionMenu;
