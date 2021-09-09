import React from "react";
import useGoogleSheets from "use-google-sheets";
import { Box } from "../components/Box";
import { Heading } from "../components/Heading";
import { Stat } from "../components/Stat";
import { Title } from "../components/Title";

export function Index() {
  const {
    data: sheetsData,
    loading,
    error,
  } = useGoogleSheets({
    apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    sheetId: import.meta.env.VITE_GOOGLE_SHEETS_ID,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }

  //@ts-ignore
  const data = sheetsData.find(({ id }) => id === "suggestions").data;

  console.log(data);
  return (
    <>
      <Title>Suggestions</Title>
      {data &&
        data.map(({ title, body }) => (
          <Box className="grid gap-y-1">
            <Heading>{title}</Heading>
            <p className="text-sm">{body}</p>
          </Box>
        ))}
    </>
  );
}
