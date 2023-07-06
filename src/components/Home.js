import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography sx={{ marginTop: 10, marginBottom: 5 }} variant="h4">
        Blockchain DNS
      </Typography>
      <Button
        component={Link}
        to="/login"
        variant="contained"
        color="secondary"
      >
        Login
      </Button>{" "}
      <br />
      <br />
      <Button
        component={Link}
        to="/createdomain"
        variant="contained"
        color="secondary"
      >
        Create Domain
      </Button>
    </Box>
  );
};

export default Home;
