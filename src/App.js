import React from "react";
import { Button, createTheme, ThemeProvider } from "@mui/material";
import { styled } from "@mui/material";
import { SideBar } from "./components/SideBar";
import { Navbar } from "./components/Navbar";
import { Feed } from "./components/Feed";
import { RightBar } from "./components/RightBar";
import { Box, Stack } from "@mui/material";
import Add from "./components/Add";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box backgroundColor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" justifyContent={"space-between"} gap={2}>
          <SideBar setMode={setMode} mode={mode} />
          <Feed />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
