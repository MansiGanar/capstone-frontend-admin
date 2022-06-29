import React from "react";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface IListRowActionMenuProps {
  handleClickOpen: () => void;
  handleViewOpen: () => void;
  handleClickEditOpen: () => void;
}

const ListRowActionMenu = ({
  handleClickOpen,
  handleViewOpen,
  handleClickEditOpen,
}: IListRowActionMenuProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
            handleViewOpen();
            handleClose();
          }}
          sx={{ color: "#858585", padding: ".5rem 1rem" }}
        >
          View
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClickEditOpen();
            handleClose();
          }}
          sx={{ color: "#858585", padding: ".5rem 1rem" }}
        >
          Edit
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClickOpen();
            handleClose();
          }}
          sx={{ color: "#858585", padding: ".5rem 1rem" }}
        >
          Delete
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default ListRowActionMenu;
