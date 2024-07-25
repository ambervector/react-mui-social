import { AppBar, Avatar, InputBase, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import React from "react";
import { Stack, Box } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { styled } from "@mui/material";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { Notifications } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    color: "white",
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    color: "black",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));

  const Icons = styled(Box)(({ theme }) => ({
    // backgroundColor: "white",
    color: "white",
    display: "flex",
    gap: "20px",
    alignItems: "center",
  }));

  const UserBox = styled(Box)(({ theme }) => ({
    // backgroundColor: "white",
    color: "white",
    display: "flex",
    gap: "10px",
    alignItems: "center",
  }));
  return (
    <AppBar position={"sticky"}>
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Socio
        </Typography>
        <AccountBalanceIcon
          sx={{ display: { xs: "block", sm: "none" }, color: "red" }}
        />
        <Search>
          <InputBase placeholder="Search..."></InputBase>
        </Search>
        <Icons sx={{ display: { xs: "none", sm: "flex" } }}>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: "25px", height: "25px" }}
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox
          sx={{ display: { xs: "display", sm: "none" } }}
          onClick={(e) => setOpen(true)}
        >
          <Typography variant="span">John</Typography>
          <Avatar
            sx={{ width: "25px", height: "25px" }}
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
          />
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};
