import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import LogoutIcon from "icons/LogoutIcon";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cssColor } from "utils/colors";
import { useDispatch } from "react-redux";
import { removeUser } from "store/features/auth";
import { removeToken } from "utils/token";
import useAuthUser from "hooks/useAuthUser";
import { useQueryClient } from "@tanstack/react-query";

export default function MenuItems() {
  const queryClient = useQueryClient();
  const { user } = useAuthUser();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(removeUser());
    removeToken();
    navigate("/login");
    queryClient.clear();
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Link to="/projects" style={{ textDecoration: "none" }}>
          <Typography sx={{ minWidth: 100, cursor: "pointer" }}>
            Projects
          </Typography>
        </Link>
        <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
          <Avatar sx={{ width: 32, height: 32 }}>
            {user.username[0].toUpperCase()}
          </Avatar>
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              border: `1px solid ${cssColor("divider")}`,
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
                borderTop: `1px solid ${cssColor("divider")}`,
                borderLeft: `1px solid ${cssColor("divider")}`,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Link to="/assigned-errors">
          <MenuItem onClick={handleClose}>Assigned Errors</MenuItem>
        </Link>
        <Link to="/invitations">
          <MenuItem onClick={handleClose}>Invitations</MenuItem>
        </Link>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon fontSize={20} color={cssColor("white")} />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
