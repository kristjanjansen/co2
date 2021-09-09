import React from "react";
import useGoogleSheets from "use-google-sheets";
import { Box } from "../components/Box";
import { Heading } from "../components/Heading";
import { useData } from "../utils";
import { LinkExernal } from "./LinkExternal";
import { Spinner } from "./Spinner";
import { Title } from "./Title";

export function Suggestions() {
  const { data, loading, error } = useData("suggestions");

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }

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
