import React from "react";
import useGoogleSheets from "use-google-sheets";
import { Box } from "../components/Box";
import { Heading } from "../components/Heading";
import { LinkExernal } from "./LinkExternal";
import { Spinner } from "./Spinner";
import { Title } from "./Title";

export function Suggestions() {
  const {
    data: sheetsData,
    loading,
    error,
  } = useGoogleSheets({
    apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    sheetId: import.meta.env.VITE_GOOGLE_SHEETS_ID,
  });

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }

  //@ts-ignore
  const data: any[] = sheetsData.find(({ id }) => id === "suggestions").data;

  return (
    <div className="grid gap-y-4">
      <Title>Suggestions</Title>
      {data &&
        data.map(({ title, body }) => (
          <Box className="grid gap-y-1">
            <Heading>{title}</Heading>
            <p className="text-sm">{body}</p>
          </Box>
        ))}
      <LinkExernal
        to={`https://docs.google.com/spreadsheets/d/${
          import.meta.env.VITE_GOOGLE_SHEETS_ID
        }/edit#gid=0`}
      >
        Google Sheets source
      </LinkExernal>
    </div>
  );
}
