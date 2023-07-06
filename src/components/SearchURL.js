import { Box, CssBaseline, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

const SearchURL = () => {
  const [bearerToken, setBearerToken] = useState("");
  const [searchURL, setSearchURL] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const handleSearch = () => {
    const apiUrl = "http://localhost:4000/channels/mychannel/chaincodes/dns";
    const headers = {
      Authorization: `Bearer ${bearerToken}`,
    };
    const data = {
      fcn: "GetIPAddressByURL",
      args: JSON.stringify([searchURL]),
    };

    axios
      .get(apiUrl, { headers, params: { data } })
      .then((response) => {
        console.log(response.data);
        setSearchResult(JSON.stringify(response.data.result));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <CssBaseline>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "15%",
        }}
      >
        <Typography variant="h4">Search URL</Typography>
        <TextField
          variant="outlined"
          placeholder="Your Private Key"
          value={bearerToken}
          onChange={(e) => setBearerToken(e.target.value)}
          sx={{ width: "70%", marginBottom: 2 }}
        />
        <TextField
          variant="outlined"
          placeholder="Search"
          value={searchURL}
          onChange={(e) => setSearchURL(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            width: "70%",
            "& .MuiOutlinedInput-root": { borderRadius: "30px" },
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
          sx={{ marginTop: 2 }}
        >
          Search
        </Button>
        {searchResult && (
          <Box sx={{ marginTop: 2 }}>
            <Typography variant="body1">Search Result:</Typography>
            <Typography variant="body2">{searchResult}</Typography>
          </Box>
        )}
      </Box>
    </CssBaseline>
  );
};

export default SearchURL;
