import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { sideMenuItems } from "../../utils/constants";
import { Link, useLocation } from "react-router-dom";

const SideMenu = () => {
  const location = useLocation();

  return (
    <List>
      {sideMenuItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <Link to={item.route} key={`side-menu-item-${index}`}>
            <ListItem
              disablePadding
              sx={{
                background:
                  location.pathname === item.route
                    ? "linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)"
                    : "inherit",
                borderRadius: "0 2rem 2rem 0",
                marginBottom: "1rem",
                paddingLeft: "1rem",
              }}
            >
              <ListItemButton
                sx={{
                  ":hover": {
                    background:
                      location.pathname === item.route ? "" : "inherit",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color:
                      location.pathname === item.route ? "#FFFFFF" : "#9849B0",
                  }}
                >
                  <Icon />
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  sx={{
                    color:
                      location.pathname === item.route ? "#FFFFFF" : "#5C5C5C",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        );
      })}
    </List>
  );
};

export default SideMenu;
