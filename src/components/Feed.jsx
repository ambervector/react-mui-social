import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";

export const Feed = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box p={2} flex={4}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};
