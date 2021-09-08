import React from "react";
import { Box } from "../components/Box";
import { Heading } from "../components/Heading";
import { Title } from "../components/Title";

export function Index() {
  return (
    <>
      <Title>Suggestions</Title>
      <Box className="grid gap-y-1">
        <Heading>Test heading</Heading>
        <p className="text-sm">Test paragraph</p>
      </Box>
    </>
  );
}
