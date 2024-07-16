import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material";
import { SideBar } from "./components/SideBar";
import { Navbar } from "./components/Navbar";
import { Feed } from "./components/Feed";
import { RightBar } from "./components/RightBar";
import { Box, Stack } from "@mui/material";

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" justifyContent={"space-between"} gap={2}>
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  );
}

export default App;
