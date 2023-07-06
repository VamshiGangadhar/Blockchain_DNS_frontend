import {
  AppBar,
  Button,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <CssBaseline>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            sx={{
              textDecoration: "none",
              color: "white",
            }}
            component={Link}
            to="/"
            variant="h6"
          >
            Blockchain DNS
          </Typography>
          <Button component={Link} to="/searchurl" variant="contained">
            Search URL
          </Button>
          <Button
            component={Link}
            to="/login"
            variant="contained"
            // color="secondary"
            sx={{ backgroundColor: "#1976d2", color: "white" }}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </CssBaseline>
  );
};

export default Navbar;
