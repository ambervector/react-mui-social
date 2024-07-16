import { Box } from "@mui/material";
import React from "react";

export const RightBar = () => {
  return (
    <Box
      bgcolor={"blue"}
      p={2}
      flex={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      RightBar
    </Box>
  );
};
